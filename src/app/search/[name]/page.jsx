'use client'

import React, { useEffect, useState } from 'react'

export default function SearchPage({ params }) {
  const [resolvedParams, setResolvedParams] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Unwrap params using React.use()
  useEffect(() => {
    if (params) {
      const unwrapParams = async () => {
        const resolved = await params; // Await the params Promise to get the resolved value
        setResolvedParams(resolved);
      };
      unwrapParams();
    }
  }, [params]);

  const name = resolvedParams?.name; // Safe access after params is resolved

  useEffect(() => {
    if (!name) return; // Don't proceed if there's no search term

    const fetchResults = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${encodeURIComponent(name)}&apiKey=8c783b7ea7844d02bf898cb39b48f84a`
        );
        const data = await res.json();
        const filteredResults = data.articles.filter(article => article.urlToImage);
        setSearchResults(filteredResults || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [name]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{name}"</h1>

      {isLoading && (
        <div className="flex justify-center items-center py-16">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
          <p className="ml-4 text-blue-500 text-lg font-semibold">Searching...</p>
        </div>
      )}

      {!isLoading && searchResults.length === 0 && (
        <p>No results found for "{name}".</p>
      )}

      {!isLoading && searchResults.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-48">
                <img
                  src={article.urlToImage || '/default.jpg'}
                  alt={article.title || 'News Image'}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-semibold text-blue-500 hover:underline"
                >
                  {article.title}
                </a>
                <p className="text-gray-600 text-sm mt-2">
                  {article.description || 'No description available.'}
                </p>
                <p className="text-gray-400 text-xs mt-4">
                  {article.author ? `By ${article.author}` : 'Unknown Author'} |{' '}
                  {article.publishedAt
                    ? new Date(article.publishedAt).toLocaleDateString()
                    : 'No Date'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}