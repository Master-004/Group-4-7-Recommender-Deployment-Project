# Group-4-7-Recommender-Deployment-Project
News Article Recommendation System
Overview
This project demonstrates the ability to deploy and consume machine learning models in Python and Azure ML Studio. The goal is to create a web application that recommends news articles to users based on machine learning models. Specifically, this system leverages collaborative filtering, content filtering, and Azure ML Studio's Wide and Deep Recommendation model to make predictions and generate article recommendations.

Dataset
The dataset consists of two CSV files:

shared_articles.csv: Contains details about the news articles, including article content and metadata (title, URL, content text in both English and Portuguese).

user_interactions.csv: Contains user interactions with the articles (views, likes, follows, bookmarks, comments), along with contextual information like platform (browser or mobile app), user geolocation, and date/time of interaction.

These datasets can be joined based on the contentId column. The dataset is available on Kaggle here.

Key Features:
Item Attributes: Article metadata such as URL, title, and content in English and Portuguese.

Contextual Information: User interaction data, including platform, geolocation, and visit date/time.

Logged Users: Long-term tracking of user preferences based on userID.

Rich Implicit Feedback: User interactions (view, like, follow, bookmark, comment) are logged with ordinal preferences (1 for VIEW, 2 for LIKE, etc.).

Tasks and Steps
1. Collaborative Filtering Model (Python)
Build a collaborative filtering model in Python based on user interactions.

Decide whether to recommend based on all items or only unrated ones.

Save the model’s predictions to a CSV file.

2. Content-Based Filtering Model (Python)
Build a content filtering model using article text and other relevant features.

Save the model’s predictions to a CSV file or save the recommendation matrix.

3. Azure ML Studio Model (Wide and Deep)
Generate either an SVD (Singular Value Decomposition) or Wide and Deep recommendation model in Azure ML Studio.

Deploy the model as an endpoint.

4. Web Application
Create a simple web page (using any framework or language of your choice) where a user can:

Enter or select an itemID.

Return three lists of 5 recommended items based on:

Python collaborative filtering model

Python content filtering model

Azure ML Studio endpoint

Use a valid userID from the dataset for all recommendations.

The application should display the recommended itemIDs for each model.

Deployment
Deploy the recommendation models and endpoint to a live environment (if required for the project).

Requirements
Python 3.x

Flask (for the web app)

Azure ML Studio (for model training and deployment)

Libraries: scikit-learn, pandas, numpy, flask, requests, azureml-sdk, etc.

Dataset: Kaggle News Dataset

Setup
Clone the repository.

Install required Python dependencies:

bash
Copy
pip install -r requirements.txt
Train and save your recommendation models in Python (Collaborative Filtering and Content-Based).

Deploy your model on Azure ML Studio.

Develop the web page to interface with your deployed models.

Ensure the page allows for input of an itemID and returns the recommendations from the three models.

Project Structure
bash
Copy
news-recommendation-system/
├── data/
│   ├── shared_articles.csv
│   ├── user_interactions.csv
├── models/
│   ├── collaborative_filtering_model.sav
│   ├── content_based_model.sav
│   ├── azure_ml_model_endpoint
├── app/
│   ├── app.py  # Web application code
│   ├── templates/
│   │   └── index.html  # Main web page
│   ├── static/
│   │   └── style.css  # Optional CSS for styling
├── requirements.txt  # List of Python dependencies
├── README.md  # Project documentation
Questions
What models did you use for the recommendation system?

Collaborative Filtering using Python and content-based filtering using article text.

A Wide and Deep recommendation model deployed via Azure ML Studio.

How did you deploy the models?

The Python models were saved as .sav files and consumed in the web application.

The Azure ML model was deployed as an endpoint for real-time predictions.

What challenges did you face during the project?

Challenges included handling the large dataset, model deployment, and integrating Python models with Azure ML.

What would you improve or extend in this project?

The project can be extended by improving the model's accuracy, adding additional user-specific features, or implementing a more complex front-end interface.
