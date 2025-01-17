"use client"
import { useState, useEffect } from "react";

export default function NewsCategoryPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const API_KEY = "8c783b7ea7844d02bf898cb39b48f84a";

  const fetchArticles = async (category) => {
    setLoading(true);
    try {
      const url =
        category === "all"
          ? `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
          : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      const filteredArticles = data.articles.filter(article => article.urlToImage);
      setArticles(filteredArticles || []);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(category);
  }, [category]);

  return (
    <div className="w-full p-4">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-lg text-white ${
              category === cat ? "bg-blue-600" : "bg-gray-500 hover:bg-gray-700"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
        <button
          onClick={() => setCategory("all")}
          className={`px-4 py-2 rounded-lg text-white ${
            category === "all" ? "bg-blue-600" : "bg-gray-500 hover:bg-gray-700"
          }`}
        >
          All
        </button>
      </div>

      {/* News Articles */}
      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
          <p className="ml-4 text-blue-500 text-lg font-semibold">Searching...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg"
            >
              <img
                src={article.urlToImage || "/default.jpg"}
                alt={article.title}
                className="w-full h-[180px] rounded-lg object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {article.description || "No description available."}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}