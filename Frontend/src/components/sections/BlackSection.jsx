import React from 'react';
import { QrCode, ChevronRight } from 'lucide-react';

const BlackSection = () => {
  return (
    <div className="py-24 bg-black text-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8 tracking-tighter">The Future of Retail is Here</h2>
            <p className="text-xl text-white/80 mb-8">
              Connect with stores, track your history, and get personalized 
              recommendations - all with one unified ID.
            </p>
            <button className="px-8 py-4 bg-white text-black text-lg font-medium hover:bg-white/90 transition-all flex items-center group">
              Learn More
              <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="aspect-square bg-white/10 rounded-full flex items-center justify-center">
            <QrCode className="w-1/3 h-1/3 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackSection;