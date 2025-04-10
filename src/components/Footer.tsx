import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-2 text-gray-500">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>for our new home</span>
        </div>
        <div className="mt-2 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Our Housewarming Party
        </div>
      </div>
    </footer>
  );
};

export default Footer;