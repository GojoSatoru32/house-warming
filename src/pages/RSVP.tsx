import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { CheckCircle, Send } from 'lucide-react';

const RSVP = () => {
  const [state, handleSubmit] = useForm("xyyqzgkj");
  const [guests, setGuests] = useState(1);

  if (state.succeeded) {
    return (
      <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg text-center">
        <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
        <h2 className="text-2xl font-serif text-gray-900 mb-4">Thank You!</h2>
        <p className="text-gray-600">
          We've received your RSVP and can't wait to celebrate with you!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-center text-gray-900 mb-8">RSVP</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
              Number of Guests
            </label>
            <select
              name="guests"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            >
              {[1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="dietary" className="block text-sm font-medium text-gray-700">
              Dietary Preferences
            </label>
            <textarea
              name="dietary"
              id="dietary"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              placeholder="Please list any dietary restrictions or preferences..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <Send className="w-4 h-4 mr-2" />
            {state.submitting ? "Sending..." : "Send RSVP"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RSVP;