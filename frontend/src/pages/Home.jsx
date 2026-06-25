import React from 'react';
import Hero from '../components/layouts/Hero';
import Main from '../components/layouts/Main';

const Home = () => {
  const categories = [
    {
      title: 'Men',
      subtitle: 'Everyday Staples',
      description: 'Sharp silhouettes and easy layers for daily wear.',
      image:
        'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Women',
      subtitle: 'Modern Essentials',
      description: 'Effortless fits made to move from day to night.',
      image:
        'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Accessories',
      subtitle: 'Final Touches',
      description: 'Caps, bags, and accents that elevate every look.',
      image:
        'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const featuredProducts = [
    {
      name: 'Classic Zip Hoodie',
      category: 'Outerwear',
      price: '$38',
      image:
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Relaxed Fit Tee',
      category: 'Tops',
      price: '$24',
      image:
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Tech Cargo Pants',
      category: 'Bottoms',
      price: '$42',
      image:
        'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Urban Utility Jacket',
      category: 'Outerwear',
      price: '$56',
      image:
        'https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=900&q=80',
    },
  ];

  const highlights = [
    {
      title: 'Premium Fabric',
      description: 'Soft, durable materials selected for comfort and long-term wear.',
    },
    {
      title: 'Fast Delivery',
      description: 'Quick dispatch and smooth shipping on all eligible orders.',
    },
    {
      title: 'Easy Returns',
      description: 'Simple, no-stress returns when something is not the right fit.',
    },
  ];

  return (
    <div className="bg-white text-black font-poppins">
      <Hero />
      <Main />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">
              Shop by Edit
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium mb-4 text-black">Find Your Style</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Curated collections designed to match your mood, season, and everyday routine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <article
                key={category.title}
                className="group rounded-2xl border border-gray-200 overflow-hidden hover:border-red-600 hover:shadow-md transition-all duration-300 bg-white"
              >
                <div className="relative h-56 p-6 flex flex-col justify-between text-white overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/45" />
                  <span className="relative z-10 text-xs uppercase tracking-[0.2em] text-gray-200">
                    {category.subtitle}
                  </span>
                  <h3 className="relative z-10 text-3xl font-medium">{category.title}</h3>
                </div>
                <div className="p-5 bg-white">
                  <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                  <button className="text-sm font-medium uppercase tracking-wide border-b border-black pb-1 text-black hover:text-red-600 hover:border-red-600 transition-colors duration-300">
                    Explore
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">
                Featured Picks
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-black">
                Best Sellers This Week
              </h2>
            </div>
            <button className="self-start md:self-auto text-sm font-medium uppercase tracking-wide border-b border-black pb-1 text-black hover:text-red-600 hover:border-red-600 transition-colors duration-300">
              View All Products
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <article
                key={product.name}
                className="rounded-2xl border border-gray-200 bg-white p-4 hover:shadow-sm hover:border-red-600 transition-all duration-300"
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  {product.category}
                </p>
                <h3 className="text-lg font-medium mb-2 text-black">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-base font-medium text-black">{product.price}</p>
                  <button className="text-xs uppercase font-medium border border-black text-black px-3 py-1.5 rounded-full hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300">
                    Add
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl bg-black text-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-300 mb-3">About SOLO</p>
              <h2 className="text-3xl sm:text-4xl font-medium mb-4">Streetwear with Purpose</h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                SOLO blends bold aesthetics with practical comfort, creating pieces that work across
                seasons and styles.
              </p>
            </div>
            <button className="mt-8 w-fit border border-white px-6 py-2.5 rounded-full text-sm font-medium uppercase hover:bg-red-600 hover:border-red-600 transition-colors duration-300">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-2xl border border-gray-200 p-5 bg-white">
                <h3 className="text-lg font-medium mb-2 text-black">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">
            Ready to Refresh?
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 text-black">
            Build Your Next Signature Look
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Explore the newest arrivals and complete your wardrobe with styles made for real life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium uppercase text-sm tracking-wide hover:bg-red-600 transition-colors duration-300">
              Shop New Arrivals
            </button>
            <button className="border border-black text-black px-8 py-3 rounded-full font-medium uppercase text-sm tracking-wide hover:bg-black hover:text-white transition-colors duration-300">
              Explore Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
