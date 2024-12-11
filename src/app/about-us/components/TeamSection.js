import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      image: "/images/team-member-1.jpg",
      name: "Alex Johnson",
      role: "Founder & CEO",
    },
    {
      image: "/images/team-member-2.jpg",
      name: "Sophia Lee",
      role: "Head of Product",
    },
    {
      image: "/images/team-member-3.jpg",
      name: "Mark Wilson",
      role: "Lead Developer",
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center mb-6">
        Meet Our Team
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 text-center mb-10 max-w-2xl mx-auto">
        Our dedicated team is passionate about making online education accessible for everyone.
      </p>

      <div className="grid md:grid-cols-3 gap-8 px-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full h-32 w-32 mx-auto mb-4 object-cover border-4 border-gray-200 transform transition-all hover:scale-110"
            />
            <h3 className="text-lg font-medium text-gray-800 mb-2">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
