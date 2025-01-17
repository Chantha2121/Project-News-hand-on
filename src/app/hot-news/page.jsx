"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const HotNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch news using NewsAPI
  const fetchNews = async () => {
    try {
      const api_key = process.env.NEXT_PUBLIC_API_KEY;// Replace with your NewsAPI key
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines',
        {
          params: {
            apiKey: "8c783b7ea7844d02bf898cb39b48f84a",
            country: 'us',
            category: 'general',
            pageSize: 10,
          },
        }
      );
      setNews(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            <p className="ml-4 text-blue-500 text-lg font-semibold">Searching...</p>
          </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-1">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Hot News
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={article.urlToImage || '/default.jpg'}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {article.description || 'No description available.'}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotNews;