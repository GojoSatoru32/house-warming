import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import { PartyPopper, CalendarCheck } from 'lucide-react';

const eventDate = new Date('2024-05-15T18:00:00');

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <PartyPopper className="w-16 h-16 mb-6 animate-bounce" />
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Welcome to Our New Home!</h1>
          <p className="text-xl md:text-2xl mb-8">Join us for a celebration of new beginnings</p>
          <Link
            to="/rsvp"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            RSVP Now
          </Link>
        </div>
      </div>

      {/* Countdown Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CalendarCheck className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-gray-900 mb-8">The Party Begins In...</h2>
            <Countdown
              date={eventDate}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {[
                    { value: days, label: 'Days' },
                    { value: hours, label: 'Hours' },
                    { value: minutes, label: 'Minutes' },
                    { value: seconds, label: 'Seconds' }
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-emerald-50 p-4 rounded-lg">
                      <div className="text-4xl font-bold text-emerald-600">{value}</div>
                      <div className="text-gray-600">{label}</div>
                    </div>
                  ))}
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;