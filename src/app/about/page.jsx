import React from "react";
import Image from "next/image";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Choeurn Chantha",
      role: "Project Manager",
      image: "/chantha.png",
    },
    {
      id: 2,
      name: "Slans Alons",
      role: "Business Development",
      image: "/marina.png",
    },
    {
      id: 3,
      name: "Josha Michal",
      role: "UX/UI Designer",
      image: "/marina.png",
    },
    {
      id: 4,
      name: "Johan Wright",
      role: "Head of Marketing",
      image: "/marina.png",
    },
  ];

  const newsItems = [
    {
      id: 1,
      title: "New Office Opening in Paris",
      date: "December 1, 2024",
      description:
        "We’re excited to announce the opening of our new office in Paris to better serve our European clients.",
    },
    {
      id: 2,
      title: "Award for Best Startup",
      date: "November 15, 2024",
      description:
        "Our company has been recognized as the best startup of the year in the tech innovation category!",
    },
    {
      id: 3,
      title: "Upcoming Annual Conference",
      date: "January 20, 2025",
      description:
        "Join us for our annual conference where we’ll share exciting updates and innovations.",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-900 py-16 px-6">
      {/* Team Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-700">Meet Our Team</h1>
        <p className="text-lg text-gray-600 mb-12">
          Meet the talented individuals who drive our company forward.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-6"
            >
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold text-blue-700">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* News Section */}
      <div className="max-w-7xl mx-auto text-center mt-20">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-700">About Project</h1>
        <p className="text-lg text-gray-600 mb-12">
          Stay updated with the latest news and events from our company.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-6"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                {news.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{news.date}</p>
              <p className="text-gray-600">{news.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;