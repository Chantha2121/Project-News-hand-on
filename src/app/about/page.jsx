import React from "react";
import Image from "next/image";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Choeurn Chantha",
      role: "Software Engineer",
      image: "/chantha2.jpg",
    },
    {
      id: 2,
      name: "Sean Nary",
      role: "Software Developer",
      image: "/nary.jpg",
    },
    {
      id: 3,
      name: "Leang Soknat",
      role: "Software Developer",
      image: "/soknat.jpg",
    },
    {
      id: 4,
      name: "Teom Marina",
      role: "Software Developer",
      image: "/marina.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 py-16 px-6">
      {/* Team Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-700">
          Meet Our Team
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          This is Our Team to build the website
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-8"
            >
              <div className="relative  w-48 h-64 mx-auto overflow-hidden rounded-lg border-4 border-blue-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="mt-6 text-lg font-bold text-blue-700">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Project Section */}
      <div className="max-w-4xl mx-auto mt-20 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-700 text-center">
          About Project
        </h1>
        <p className="text-gray-600 text-lg text-center">
          Our project is the Hand on Project for course Web and Cloud Technology. We build the Website using Next JS frontend, Node JS for the backend, and also Database we use MySql. For the Website is News Aggregator Website. Our Website Provide the all the News all the world.
        </p>
      </div>
    </div>
  );
};

export default About;
