import React, { useState } from 'react';


const WomenSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Women's shoe categories
  const categories = ['all', 'heels', 'flats', 'boots', 'sneakers', 'sandals'];

  // Women's shoe products
  const products = [
    {
      id: 1,
      name: "Elegant Stiletto Heels",
      price: 129.99,
      category: "heels",
      rating: 4.8,
      image: process.env.PUBLIC_URL + "/images/Shose/heel1.jpg",
      colors: ["#000000", "#8B0000", "#F5F5DC"],
      sizes: [5, 6, 7, 8, 9],
      featured: true
    },
    {
      id: 2,
      name: "Comfortable Ballet Flats",
      price: 79.99,
      category: "flats",
      rating: 4.6,
      image: process.env.PUBLIC_URL + "/images/Shose/flat1.jpg",
      colors: ["#000000", "#F5F5DC", "#8B4513"],
      sizes: [5, 6, 7, 8, 9, 10]
    },
    {
      id: 3,
      name: "Leather Ankle Boots",
      price: 149.99,
      category: "boots",
      rating: 4.9,
      image: process.env.PUBLIC_URL + "/images/Shose/boot1.jpg",
      colors: ["#8B4513", "#000000", "#696969"],
      sizes: [6, 7, 8, 9]
    },
    {
      id: 4,
      name: "Casual Canvas Sneakers",
      price: 69.99,
      category: "sneakers",
      rating: 4.5,
      image: process.env.PUBLIC_URL + "/images/Shose/sneaker1.jpg",
      colors: ["#FFFFFF", "#000000", "#FF69B4"],
      sizes: [5, 6, 7, 8, 9, 10]
    },
    {
      id: 5,
      name: "Summer Strappy Sandals",
      price: 89.99,
      category: "sandals",
      rating: 4.7,
      image: process.env.PUBLIC_URL + "/images/Shose/sandal1.jpg",
      colors: ["#F5F5DC", "#8B4513", "#000000"],
      sizes: [5, 6, 7, 8, 9]
    },
    {
      id: 6,
      name: "Block Heel Pumps",
      price: 119.99,
      category: "heels",
      rating: 4.6,
      image: process.env.PUBLIC_URL + "/images/Shose/heel2.jpg",
      colors: ["#000000", "#FF0000", "#F5F5DC"],
      sizes: [6, 7, 8, 9]
    }
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-gray-800 flex justify-center items-center overflow-hidden">
        <img 
          src={process.env.PUBLIC_URL + "/images/banners/women-banner.jpg"} 
          alt="Women's Footwear Collection" 
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-white text-5xl font-bold uppercase tracking-wider mb-4">
            Women's Collection
          </h1>
          <p className="text-xl text-gray-200 mb-6">Elegance meets comfort in our women's footwear line</p>
          <div className="mt-4 w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Discover Our Women's Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From elegant heels to comfortable flats, our women's footwear collection offers style and comfort for every occasion.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                  activeCategory === category 
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-64">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                {product.featured && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-1">{product.rating}</span>
                </div>
                
                {/* Color swatches */}
                <div className="flex gap-2 mb-3">
                  {product.colors.map((color, index) => (
                    <div 
                      key={index}
                      className="w-5 h-5 rounded-full border border-gray-300 cursor-pointer"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                
                {/* Size options */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.sizes.map(size => (
                    <span
                      key={size}
                      className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800"
                    >
                      US {size}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-red-600">${product.price.toFixed(2)}</span>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No products found for this category.</p>
          </div>
        )}

        {/* Featured Collection */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Trending This Season</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular styles that are making waves this season.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden group">
                <img 
                src={process.env.PUBLIC_URL + "/images/Shose/featured1.jpg"} 
                alt="Elegant Heels Collection" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2">Elegant Heels</h3>
                <p className="text-gray-200 mb-4">Perfect for any formal occasion</p>
                <button className="bg-white text-red-600 px-6 py-2 rounded-md font-medium self-start hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden group">
                <img 
                src={process.env.PUBLIC_URL + "/images/Shose/featured2.jpg"} 
                alt="Casual Comfort Collection" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2">Casual Comfort</h3>
                <p className="text-gray-200 mb-4">Everyday styles that don't compromise on comfort</p>
                <button className="bg-white text-red-600 px-6 py-2 rounded-md font-medium self-start hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenSection;