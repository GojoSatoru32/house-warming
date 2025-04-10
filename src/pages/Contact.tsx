import React from "react";
import { MapPin, Car, DoorOpen, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-center text-gray-900 mb-12">
        Getting Here
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Map */}
        <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d242.9834096065048!2d77.68674905886121!3d12.988822394025261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1744275298638!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>

        {/* Information */}
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Address</h2>
              <p className="text-gray-600 mt-2">Happy Living Luxury PG</p>
              <p className="text-gray-600">
                Outer Ring Road, Mahadevpura, Bengaluru
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Car className="w-6 h-6 text-emerald-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Parking</h2>
              <p className="text-gray-600 mt-2">
                Oh absolutely, tons of parking—if you're a bike. The surrounding
                areas have free street parking... for the two cyclists who get
                there first. For everyone else, there's a parking garage two
                blocks away on Party Avenue, because who doesn’t love a nice
                pre-party cardio session?
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <DoorOpen className="w-6 h-6 text-emerald-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Entry Instructions
              </h2>
              <p className="text-gray-600 mt-2">
                Enter through the main lobby and take the elevator to the 5th
                floor. Our unit is 5B, right across from the elevator.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-emerald-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Need Help?
              </h2>
              <p className="text-gray-600 mt-2">
                If you have trouble finding us, call or text:
                <br />
                8925013838
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
