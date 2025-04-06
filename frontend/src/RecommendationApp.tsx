import { useEffect, useState } from 'react';

function RecommendationApp() {
  const [itemIds, setItemIds] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [recommendations, setRecommendations] = useState({
    collaborative: [],
    contentBased: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://localhost:5001/Recommendation/valid-items')
      .then((res) => res.json())
      .then(setItemIds);
  }, []);

  const fetchRecommendations = async (contentId: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://localhost:5001/Recommendation/recommendations/${contentId}`
      );
      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }
      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      console.error('Error fetching recommendations', error);
    }
    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-white mb-4">
        Item Recommendation System
      </h1>
      <br />
      <div className="bg-light row align-items-stretch border rounded shadow p-4">
        {/* Left side: Image */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="../4085219.jpg"
            className="img-fluid rounded"
            alt="Stats"
            style={{ maxHeight: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Right side: Form + Recommendations */}
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div className="mb-3">
            <label htmlFor="itemSelect" className="form-label fw-bold">
              Item ID:
            </label>
            <select
              id="itemSelect"
              className="form-select mb-3"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
            >
              <option value="">Select an Item</option>
              {itemIds.map((id) => (
                <option key={id} value={id}>
                  {id}
                </option>
              ))}
            </select>

            <button
              className={`w-100 btn ${!selectedItem || loading ? 'btn-secondary' : 'btn-success'}`}
              onClick={() => fetchRecommendations(selectedItem)}
              disabled={!selectedItem || loading}
            >
              {loading ? 'Loading...' : 'Get Recommendations'}
            </button>
          </div>
          <br />
          <h2 className="card-title h5 mb-4">
            <strong>Recommendations</strong>
          </h2>
          {recommendations.collaborative.length > 0 ||
          recommendations.contentBased.length > 0 ? (
            <div className="card border-0 mt-auto">
              <div className="card-body">
                {recommendations.collaborative.length > 0 && (
                  <div className="mb-4 rounded">
                    <h4 className="h6">
                      <strong>Collaborative Filtering</strong>
                    </h4>
                    <ul className="list-group">
                      {recommendations.collaborative.map((id, index) => (
                        <li
                          key={`collab-${index}`}
                          className="list-group-item border-0"
                          style={{ backgroundColor: '#7fb49a' }}
                        >
                          {id}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {recommendations.contentBased.length > 0 && (
                  <div className="rounded">
                    <h4 className="h6">
                      <strong>Content-Based Filtering</strong>
                    </h4>
                    <ul className="list-group">
                      {recommendations.contentBased.map((id, index) => (
                        <li
                          key={`content-${index}`}
                          className="list-group-item border-0"
                          style={{ backgroundColor: '#7fb49a' }}
                        >
                          {id}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default RecommendationApp;
