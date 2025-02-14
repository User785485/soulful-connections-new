import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import TopBanner from "./TopBanner";
import TypeformButton from "./TypeformButton";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <TopBanner />
      <div className="bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link
              to="/"
              className="flex items-center gap-2 font-serif text-2xl md:text-3xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://i.postimg.cc/pLDv3V2L/Logo-def.png"
                alt="Logo"
                className="w-8 h-8"
              />
              <span className="font-bold">My Muqabala</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="font-medium text-accent hover:text-pink-500 transition-colors"
              >
                Accueil
              </Link>
              <TypeformButton
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-semibold px-4 md:px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Commencer
              </TypeformButton>
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-accent hover:text-pink-500 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-primary-light">
              <div className="py-4 px-4 space-y-4">
                <Link
                  to="/"
                  className="block font-medium text-accent hover:text-pink-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <TypeformButton
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-semibold px-4 py-2 rounded-full transition-opacity"
                >
                  Commencer
                </TypeformButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
