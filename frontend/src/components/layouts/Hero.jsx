import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative min-h-[85vh] w-full bg-cover bg-center md:bg-fixed flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/images/homeImage10.jpg)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-white text-center max-w-3xl px-4 sm:px-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gray-300 mb-4">
          New Season Collection
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl uppercase font-medium tracking-[0.1em] mb-6">
          Be Seen | Be SOLO
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-light mb-8 font-serif text-gray-200 max-w-2xl mx-auto">
          Step into the spotlight with SOLO — where bold style meets everyday comfort.
        </p>
        <button className="border border-white text-white px-7 py-3 rounded-full font-medium hover:bg-red-600 hover:border-red-600 transition cursor-pointer uppercase text-sm tracking-wide">
          View Collection
        </button>
      </div>
    </section>
  );
};

export default Hero;
