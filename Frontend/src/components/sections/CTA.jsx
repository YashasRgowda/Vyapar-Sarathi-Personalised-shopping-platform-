import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-screen-2xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-8 tracking-tighter">
          Ready to Transform?
        </h2>
        <button 
          onClick={() => navigate('/register')}
          className="px-8 py-4 bg-white text-black text-lg font-medium hover:bg-white/90 transition-all"
        >
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default CTA;
