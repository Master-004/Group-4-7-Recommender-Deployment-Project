# Group-4-7-Recommender-Deployment-Project
# News Article Recommendation System

## Overview

This project demonstrates the ability to deploy and consume machine learning models in Python and Azure ML Studio. The goal is to create a web application that recommends news articles to users based on machine learning models. Specifically, this system leverages collaborative filtering, content filtering, and Azure ML Studio's Wide and Deep Recommendation model to make predictions and generate article recommendations.

## Dataset

The dataset consists of two CSV files:

- **shared_articles.csv**: Contains details about the news articles, including article content and metadata (title, URL, content text in both English and Portuguese).
- **user_interactions.csv**: Contains user interactions with the articles (views, likes, follows, bookmarks, comments), along with contextual information like platform (browser or mobile app), user geolocation, and date/time of interaction.

These datasets can be joined based on the `contentId` column. The dataset is available on Kaggle [here](https://www.kaggle.com/datasets/gspmoreira/articles-sharing-reading-from-cit-deskdrop?resource=download).

### Key Features:

- **Item Attributes**: Article metadata such as URL, title, and content in English and Portuguese.
- **Contextual Information**: User interaction data, including platform, geolocation, and visit date/time.
- **Logged Users**: Long-term tracking of user preferences based on userID.
- **Rich Implicit Feedback**: User interactions (view, like, follow, bookmark, comment) are logged with ordinal preferences (1 for VIEW, 2 for LIKE, etc.).

## Tasks and Steps

### 1. Collaborative Filtering Model (Python)
- Build a collaborative filtering model in Python based on user interactions.
- Decide whether to recommend based on all items or only unrated ones.
- Save the model’s predictions to a CSV file.

### 2. Content-Based Filtering Model (Python)
- Build a content filtering model using article text and other relevant features.
- Save the model’s predictions to a CSV file or save the recommendation matrix.

### 3. Azure ML Studio Model (Wide and Deep)
- Generate either an SVD (Singular Value Decomposition) or Wide and Deep recommendation model in Azure ML Studio.

### 4. Web Application
- Create a simple web page (using any framework or language of your choice) where a user can:
  - Enter or select an `itemID`.
  - Return three lists of 5 recommended items based on:
    1. Python collaborative filtering model
    2. Python content filtering model
- Use a valid `userID` from the dataset for all recommendations.
- The application should display the recommended `itemIDs` for each model.
