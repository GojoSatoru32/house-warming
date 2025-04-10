import React from "react";
import { Clock, MapPin, Shirt } from "lucide-react";

const EventDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-center text-gray-900 mb-12">
        Event Details
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Date & Time */}
          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 text-emerald-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Date & Time
              </h2>
              <p className="text-gray-600 mt-2">May 15th, 2024</p>
              <p className="text-gray-600">6:00 PM - 10:00 PM</p>
            </div>
          </div>

          {/* Venue */}
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Venue</h2>
              <p className="text-gray-600 mt-2">Near Anjeneeya Temple</p>
              <p className="text-gray-600">Mahadevpura, 560048</p>
            </div>
          </div>

          {/* Dress Code */}
          <div className="flex items-start space-x-4">
            <Shirt className="w-6 h-6 text-emerald-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Dress Code
              </h2>
              <p className="text-gray-600 mt-2">Smart Casual</p>
              <p className="text-gray-600">Think comfortable yet stylish!</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d242.9834096065048!2d77.68674905886121!3d12.988822394025261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1744275122452!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Spotify Playlist */}
      <div className="mt-16">
        <h2 className="text-2xl font-serif text-center text-gray-900 mb-6">
          Party Playlist
        </h2>
        <div className="max-w-xl mx-auto">
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
            width="100%"
            height="380"
            frameBorder="0"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
