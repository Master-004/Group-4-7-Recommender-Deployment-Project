using _455Models.data;
using CsvHelper;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System.IO;
using System.Linq;

namespace _455Models.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class RecommendationController : ControllerBase
    {
        private readonly string itemsFilePath = Path.Combine(Directory.GetCurrentDirectory(), "data", "shared_articles.csv");
        private readonly string recomCollabFilePath = Path.Combine(Directory.GetCurrentDirectory(), "data", "Article_Recommendations_Collaborative.csv");
        private readonly string recomContFilePath = Path.Combine(Directory.GetCurrentDirectory(), "data", "Article_Recommendations_Content.csv");



        // Get list of valid items
        [HttpGet("valid-items")]
        public IActionResult GetValidItems()
        {
            var items = ReadCsvFile<Item>(itemsFilePath);
            var collabRecs = ReadCsvFile<Recommendation>(recomCollabFilePath);
            var contentRecs = ReadCsvFile<Recommendation>(recomContFilePath);

            // Convert all contentIds to strings for consistent comparison
            var itemIds = items.Select(i => i.contentId.ToString().Trim());
            var collabIds = collabRecs.Select(r => r.contentId.Trim());
            var contentIds = contentRecs.Select(r => r.contentId.Trim());

            var validIds = itemIds
                .Intersect(collabIds)
                .Intersect(contentIds)
                .Distinct()
                .ToList();

            return Ok(validIds);
        }



        // Helper method to read a CSV file and map its contents to a list of objects
        private List<T> ReadCsvFile<T>(string filePath)
        {
            using (var reader = new StreamReader(filePath))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                return csv.GetRecords<T>().ToList();
            }
        }

        // Get list of recommendations
        [HttpGet("recommendations/{contentId}")]
        public IActionResult GetRecommendations(string contentId)
        {
            var Collabrecommendations = ReadCsvFile<Recommendation>(recomCollabFilePath);
            var Contentrecommendations = ReadCsvFile<Recommendation>(recomContFilePath);

            var Colmatch = Collabrecommendations.FirstOrDefault(r => r.contentId == contentId);
            var Conmatch = Contentrecommendations.FirstOrDefault(r => r.contentId == contentId);

            if (Colmatch == null || Conmatch == null)
            {
                return NotFound(new { error = "Content ID not found in one or both sources" });
            }


            var result = new
            {
                contentId = contentId,
                collaborative = new List<string>
        {
            Colmatch.recommendation1,
            Colmatch.recommendation2,
            Colmatch.recommendation3,
            Colmatch.recommendation4,
            Colmatch.recommendation5
        },
                contentBased = new List<string>
        {
            Conmatch.recommendation1,
            Conmatch.recommendation2,
            Conmatch.recommendation3,
            Conmatch.recommendation4,
            Conmatch.recommendation5
        }
            };

            return Ok(result);
        }



    }

}

