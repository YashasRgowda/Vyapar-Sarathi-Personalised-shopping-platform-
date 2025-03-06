import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/6593567/pexels-photo-6593567.jpeg"
          alt="Hero" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-screen-2xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-7xl font-bold text-white mb-8 tracking-tighter">
              Transform Your Shopping Experience
            </h1>
            <p className="text-xl text-white/80 mb-12 max-w-xl">
              One unified ID for all your retail needs. Smart recommendations,
              seamless experience, endless possibilities.
            </p>
            <button 
              onClick={() => navigate('/register')}
              className="px-8 py-4 bg-white text-black text-lg font-medium hover:bg-white/90 transition-all flex items-center group"
            >
              Get Started
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;