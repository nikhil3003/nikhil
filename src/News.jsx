import React from 'react';
import './News.css';

const newsData = [
  { title: 'New Fitness Trends', content: 'Explore the latest trends in fitness.' },
  { title: 'Healthy Eating Tips', content: 'Tips for a balanced diet.' },
  { title: 'Title 3', content: 'Content for news item 3' },
  { title: 'Title 4', content: 'Content for news item 4' },
  { title: 'Title 5', content: 'Content for news item 5' },
  { title: 'Title 6', content: 'Content for news item 6' },
  { title: 'Title 7', content: 'Content for news item 7' },
  { title: 'Title 8', content: 'Content for news item 8' },
  { title: 'Title 9', content: 'Content for news item 9' },
];
  
const News = () => {
  return (
    <div className="news-container">
      <div className="news-scroller">
        {newsData.map((news, index) => (
          <div key={index} className="news-item">
            <h2 className="news-title">{news.title}</h2>
            <p className="news-content">{news.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
