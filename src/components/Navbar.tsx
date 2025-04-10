import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Mail, Image, Gift, MapPin } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/details', label: 'Details', icon: Calendar },
    { path: '/rsvp', label: 'RSVP', icon: Mail },
    { path: '/gallery', label: 'Gallery', icon: Image },
    { path: '/registry', label: 'Registry', icon: Gift },
    { path: '/contact', label: 'Contact', icon: MapPin },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between w-full">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-serif text-emerald-600">
                Our New Home
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`${
                    location.pathname === path
                      ? 'border-emerald-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  <Icon className="w-4 h-4 mr-1" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`${
                location.pathname === path
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium flex items-center`}
            >
              <Icon className="w-5 h-5 mr-2" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;