import React, { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Navigation Links */}
          <div className="flex items-center space-x-6">
            <span className="text-2xl md:text-3xl font-bold tracking-tighter">
              Vyapar Sarathi
            </span>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="hover:opacity-70 transition-opacity">
                New
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                Featured
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                Solutions
              </a>
            </div>
          </div>

          {/* Login Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="hidden lg:flex items-center space-x-2 px-6 py-2 border border-black rounded-full text-black font-semibold uppercase tracking-wide transition-all hover:bg-black hover:text-white"
            >
              <User className="w-5 h-5" />
              <span>Login</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 " /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white text-black transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6"
          >
            <X className="w-6 h-6" />
          </button>
          <a href="#" className="text-xl font-medium hover:opacity-70 transition-opacity">
            New
          </a>
          <a href="#" className="text-xl font-medium hover:opacity-70 transition-opacity">
            Featured
          </a>
          <a href="#" className="text-xl font-medium hover:opacity-70 transition-opacity">
            Solutions
          </a>
          <button
            onClick={() => navigate("/login")}
            className="flex items-center space-x-2 px-6 py-2 border border-black rounded-full text-black font-semibold uppercase tracking-wide transition-all hover:bg-black hover:text-white"
          >
            <User className="w-5 h-5" />
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
