import React from 'react';

const Stats = () => {
  const stats = [
    { number: "500+", label: "Partner Stores" },
    { number: "50K+", label: "Active Users" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "30%", label: "Sales Increase" }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;