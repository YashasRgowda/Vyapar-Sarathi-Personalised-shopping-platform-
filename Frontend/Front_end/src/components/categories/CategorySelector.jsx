import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CategorySelector = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Select Category');

  const categories = ['Clothing', 'Medical'];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="relative w-full max-w-md">
        {/* Nike Logo */}
        <div className="text-center mb-8">
          <div className="text-white text-4xl font-bold tracking-tighter">Vyapar Sarathi</div>
          <div className="text-white/60 text-sm mt-2 tracking-wide">CHOOSE YOUR CATEGORY</div>
        </div>

        {/* Category Selector */}
        <div className="relative z-20">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white p-4 rounded-xl flex items-center justify-between hover:bg-white/20 transition-all duration-300"
          >
            <span className="text-lg font-medium">{selectedCategory}</span>
            <ChevronDown 
              className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute w-full mt-2 bg-black/90 border border-white/20 rounded-xl overflow-hidden shadow-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsOpen(false);
                  }}
                  className="w-full p-4 text-left text-white hover:bg-white/20 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Action Button */}
        <button 
          onClick={() => navigate('/sellersdashboard')}  
          className="relative z-10 w-full mt-6 bg-white text-black py-4 rounded-xl font-bold hover:bg-white/90 transition-all duration-300"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default CategorySelector;