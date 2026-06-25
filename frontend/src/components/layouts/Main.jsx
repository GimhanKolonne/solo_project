import React from 'react';

const Main = () => {
  const trendingItems = [
    {
      title: 'Urban Comfort',
      label: 'Oversized Hoodies',
      description: 'Street-style essentials for the modern wardrobe',
      image:
        'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Clean Lines',
      label: 'Minimalist Tees',
      description: 'Timeless basics that never go out of style',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Bold Expression',
      label: 'Statement Jackets',
      description: 'Make your mark with standout outerwear',
      image:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center mt-9 font-poppins bg-white py-16">
      <div className="text-black text-center max-w-6xl px-4 w-full">
        <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">
          Featured Now
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-4 text-black">Trending</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          Fresh drops and fan favorites built for everyday style.
        </p>

        {/* Featured trending items grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {trendingItems.map((item) => (
            <div
              key={item.title}
              className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:shadow-md"
            >
              <div className="relative overflow-hidden bg-gray-200 aspect-square mb-5 rounded-xl">
                <img
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center px-4">
                  <span className="text-white text-lg font-medium text-center">{item.label}</span>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-black">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button className="bg-black text-white px-8 py-3 font-medium rounded-full hover:bg-red-600 transition duration-300 uppercase text-sm tracking-wide">
            Shop Trending
          </button>
          <button className="border border-black text-black px-8 py-3 font-medium rounded-full hover:bg-black hover:text-white transition duration-300 uppercase text-sm tracking-wide">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
