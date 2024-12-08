import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import NewsCard from "@/components/newCard";


// Fetch News Data
async function fetchNewsData() {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=8c783b7ea7844d02bf898cb39b48f84a`)
    const articles = response.data.articles;

    // Map data to match your UI requirements
    return {
      trending: articles.slice(0, 6).map((article, index) => ({
        id: index,
        title: article.title,
        description: article.description,
        imageUrl: article.urlToImage || "/default.jpg",
        link: article.url,
      })),
      latest: articles.slice(6, 14).map((article, index) => ({
        id: index + 3,
        title: article.title,
        description: article.description,
        imageUrl: article.urlToImage|| "/default.jpg",
        link: article.url,
      })),
    };
  } catch (error) {
    console.error("Error fetching news data:", error);
    return { trending: [], latest: [] }; // Return empty arrays in case of error
  }
}

// Home Page Component
export default async function HomePage() {
  const newsData = await fetchNewsData();

  return (
    <main className="min-h-screen bg-[#fbffff] text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-900">
        <Image
          src="/home.png"
          alt="Hero News"
          width={1920}
          height={1080}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
          <div className="text-center max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white">
              Stay Informed with the Latest News
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-300">
              Breaking stories from around the world, delivered to you.
            </p>
            <Link href="/category" passHref>
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                Explore News
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trending News */}
      <section className="py-8 px-4 sm:px-6 md:px-12 lg:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Trending News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.trending.map((item) => (
            <div key={`trending-${item.id}`}>
              <NewsCard
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="py-8 px-4 sm:px-6 md:px-12 lg:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Latest News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.latest.map((item) => (
            <NewsCard
              key={`latest-${item.id}`}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              link={item.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
