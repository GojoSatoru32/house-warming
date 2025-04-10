import React from 'react';
import { Gift, ExternalLink } from 'lucide-react';

const Registry = () => {
  const wishlistItems = [
    {
      name: 'Cozy Throw Blanket',
      description: 'Perfect for movie nights',
      price: '$49.99',
      link: 'https://example.com/blanket',
      icon: '🛋️'
    },
    {
      name: 'Smart Home Hub',
      description: 'Control our new home with voice commands',
      price: '$129.99',
      link: 'https://example.com/smarthub',
      icon: '🏠'
    },
    {
      name: 'Coffee Maker',
      description: 'For those perfect morning brews',
      price: '$199.99',
      link: 'https://example.com/coffee',
      icon: '☕'
    },
    {
      name: 'Plant Collection',
      description: 'Help us bring some green into our space',
      price: '$75.00',
      link: 'https://example.com/plants',
      icon: '🌿'
    },
    {
      name: 'Wall Art Set',
      description: 'Beautiful prints for our living room',
      price: '$150.00',
      link: 'https://example.com/art',
      icon: '🎨'
    },
    {
      name: 'Kitchen Essentials Set',
      description: 'Everything needed for cooking adventures',
      price: '$299.99',
      link: 'https://example.com/kitchen',
      icon: '🍳'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Gift className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
        <h1 className="text-4xl font-serif text-gray-900 mb-4">Gift Registry</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your presence is our present! However, if you'd like to help us make our house a home,
          here are some items we'd love to add to our space.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-emerald-600 font-semibold">
                  {item.price}
                </span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700"
                >
                  View Item
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Registry;