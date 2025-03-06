import React from "react";
import QR1 from "../../assets/QR1.png";
import img1 from "../../assets/11.png";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, QrCode, BarChart } from 'lucide-react'; // or whatever icon library you're using


const Featured = () => {

  const [activeSolution, setActiveSolution] = useState(0);
  const solutions = [
    {
      title: "Smart Shopping",
      description: "Personalized recommendations based on your style",
      image: img1,
      icon: <ShoppingBag className="w-6 h-6 text-gray-800" />
    },
    {
      title: "Unified QR",
      description: "One code for all your retail needs",
      image: QR1,
      icon: <QrCode className="w-6 h-6 text-gray-800" />
    },
    {
      title: "Retail Analytics",
      description: "Data-driven insights for better business",
      image: "https://images.pexels.com/photos/6476586/pexels-photo-6476586.jpeg",
      icon: <BarChart className="w-6 h-6 text-gray-800" />
    }
  ];

  return (
    <div className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tighter">
            Featured Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Innovative technology designed to enhance your retail experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl flex justify-center w-[70%] overflow-hidden shadow-2xl shadow-black/10"
              >
                <img
                  src={solutions[activeSolution].image}
                  alt={solutions[activeSolution].title}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 md:mt-0">
            <div className="space-y-4 sm:space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    activeSolution === index
                      ? "bg-black"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveSolution(index)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center">
                    <div className="mr-4 flex-shrink-0">{solution.icon}</div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg sm:text-xl font-bold mb-2 ${
                          activeSolution === index ? "text-white" : "text-black"
                        }`}
                      >
                        {solution.title}
                      </h3>
                      <p
                        className={`${
                          activeSolution === index
                            ? "text-gray-200"
                            : "text-gray-600"
                        } text-sm sm:text-base`}
                      >
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
