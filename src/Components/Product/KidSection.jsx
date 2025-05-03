import React, { useState } from 'react';

const KidsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedSize, setSelectedSize] = useState(null);
  const [ageGroup, setAgeGroup] = useState('all');

  // Kids shoes products data
  const products = [
    {
      id: 1,
      name: "Dinosaur Light-Up Sneakers",
      price: 39.99,
      category: "casual",
      ageGroup: "toddler",
      rating: 4.7,
      image: "/images/kids/shoe1.jpg",
      colors: ["#228B22", "#1E90FF", "#FF4500"],
      sizes: [5, 6, 7, 8, 9, 10]
    },
    {
      id: 2,
      name: "Princess Sparkle Flats",
      price: 34.99,
      category: "dress",
      ageGroup: "toddler",
      rating: 4.5,
      image: "/images/kids/shoe2.jpg",
      colors: ["#FFB6C1", "#9370DB", "#FFFFFF"],
      sizes: [5, 6, 7, 8, 9]
    },
    {
      id: 3,
      name: "Junior Sports Trainers",
      price: 49.99,
      category: "athletic",
      ageGroup: "school-age",
      rating: 4.8,
      image: "/images/kids/shoe3.jpg",
      colors: ["#000000", "#FF0000", "#4169E1"],
      sizes: [11, 12, 13, 1, 2, 3]
    },
    {
      id: 4,
      name: "Cartoon Character Slip-Ons",
      price: 29.99,
      category: "casual",
      ageGroup: "toddler",
      rating: 4.4,
      image: "/images/kids/shoe4.jpg",
      colors: ["#1E90FF", "#FF69B4", "#32CD32"],
      sizes: [4, 5, 6, 7, 8, 9, 10]
    },
    {
      id: 5,
      name: "Kids Waterproof Boots",
      price: 54.99,
      category: "outdoor",
      ageGroup: "school-age",
      rating: 4.6,
      image: "/images/kids/shoe5.jpg",
      colors: ["#8B4513", "#000000", "#4682B4"],
      sizes: [10, 11, 12, 13, 1, 2, 3]
    },
    {
      id: 6,
      name: "Velcro First Walkers",
      price: 32.99,
      category: "first-steps",
      ageGroup: "toddler",
      rating: 4.9,
      image: "/images/kids/shoe6.jpg",
      colors: ["#F5F5DC", "#FFD700", "#FF6347"],
      sizes: [3, 4, 5, 6, 7]
    },
    {
      id: 7,
      name: "Kids Formal Loafers",
      price: 44.99,
      category: "dress",
      ageGroup: "school-age",
      rating: 4.3,
      image: "/images/kids/shoe7.jpg",
      colors: ["#000000", "#8B4513"],
      sizes: [12, 13, 1, 2, 3, 4]
    },
    {
      id: 8,
      name: "Sport Sandals for Kids",
      price: 36.99,
      category: "outdoor",
      ageGroup: "school-age",
      rating: 4.5,
      image: "/images/kids/shoe8.jpg",
      colors: ["#000080", "#008000", "#FF4500"],
      sizes: [10, 11, 12, 13, 1, 2]
    },
    {
      id: 9,
      name: "Glitter Ballet Flats",
      price: 38.99,
      category: "dress",
      ageGroup: "school-age",
      rating: 4.7,
      image: "/images/kids/shoe9.jpg",
      colors: ["#FFD700", "#FF69B4", "#C0C0C0"],
      sizes: [11, 12, 13, 1, 2, 3]
    },
    {
      id: 10,
      name: "Kids Indoor Slippers",
      price: 24.99,
      category: "casual",
      ageGroup: "toddler",
      rating: 4.4,
      image: "/images/kids/shoe10.jpg",
      colors: ["#9370DB", "#FF6347", "#4682B4"],
      sizes: [5, 6, 7, 8, 9, 10]
    },
    {
      id: 11,
      name: "Toddler Basketball Shoes",
      price: 42.99,
      category: "athletic",
      ageGroup: "toddler",
      rating: 4.6,
      image: "/images/kids/shoe11.jpg",
      colors: ["#FF0000", "#000000", "#1E90FF"],
      sizes: [6, 7, 8, 9, 10]
    },
    {
      id: 12,
      name: "Junior Football Cleats",
      price: 57.99,
      category: "athletic",
      ageGroup: "school-age",
      rating: 4.8,
      image: "/images/kids/shoe12.jpg",
      colors: ["#000000", "#32CD32", "#FFD700"],
      sizes: [12, 13, 1, 2, 3, 4, 5]
    },
    {
      id: 13,
      name: "Cartoon Rain Boots",
      price: 38.99,
      category: "outdoor",
      ageGroup: "toddler",
      rating: 4.5,
      image: "/images/kids/shoe13.jpg",
      colors: ["#FF69B4", "#4169E1", "#32CD32"],
      sizes: [5, 6, 7, 8, 9, 10]
    },
    {
      id: 14,
      name: "Kids Snow Boots",
      price: 59.99,
      category: "outdoor",
      ageGroup: "school-age",
      rating: 4.7,
      image: "/images/kids/shoe14.jpg",
      colors: ["#000000", "#4169E1", "#8B4513"],
      sizes: [11, 12, 13, 1, 2, 3]
    },
    {
      id: 15,
      name: "Toddler Summer Sandals",
      price: 29.99,
      category: "casual",
      ageGroup: "toddler",
      rating: 4.3,
      image: "/images/kids/shoe15.jpg",
      colors: ["#FF69B4", "#FFD700", "#4682B4"],
      sizes: [4, 5, 6, 7, 8, 9]
    },
    {
      id: 16,
      name: "Kids Hiking Boots",
      price: 52.99,
      category: "outdoor",
      ageGroup: "school-age",
      rating: 4.6,
      image: "/images/kids/shoe16.jpg",
      colors: ["#8B4513", "#808080", "#556B2F"],
      sizes: [10, 11, 12, 13, 1, 2, 3]
    }
  ];

  // Add size selection handler
  const handleSizeSelect = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  // Get unique categories and age groups
  const categories = ['all', ...new Set(products.map(product => product.category))];
  const ageGroups = ['all', ...new Set(products.map(product => product.ageGroup))];

  // Filter products based on active category and age group
  const filteredProducts = products.filter(product => {
    const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
    const ageGroupMatch = ageGroup === 'all' || product.ageGroup === ageGroup;
    return categoryMatch && ageGroupMatch;
  });

  // Sort products based on selection
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'featured') {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    } else if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });

  // Helper to display size in appropriate format
  const displaySize = (size) => {
    if (size <= 10) {
      return `${size} (Toddler)`;
    } else if (size <= 13) {
      return `${size} (Little Kid)`;
    } else {
      return `${size} (Big Kid)`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-blue-600 flex justify-center items-center overflow-hidden">
        <img 
          src="/api/placeholder/1200/400" 
          alt="Kids Shoes Collection" 
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-white text-5xl font-bold uppercase tracking-wider mb-4">
            Happy Little Feet
          </h1>
          <p className="text-xl text-white mb-6">Fun, Comfortable Shoes for Growing Kids</p>
          <div className="mt-4 w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          {/* Age Group Filter */}
          <div className="flex flex-wrap gap-2">
            {ageGroups.map(group => (
              <button
                key={group}
                onClick={() => setAgeGroup(group)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                  ageGroup === group 
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {group === 'all' ? 'All Ages' : 
                  group === 'toddler' ? 'Toddler (Sizes 3-10)' : 
                  'School Age (Sizes 10-5)'}
              </button>
            ))}
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                  activeCategory === category 
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Sort Options */}
          <div className="flex items-center">
            <label className="text-gray-700 mr-2">Sort by:</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-blue-300">
              <div className="relative h-64">
                <img src="/api/placeholder/300/300" alt={product.name} className="w-full h-full object-cover" />
                {product.ageGroup === 'toddler' && (
                  <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Toddler
                  </span>
                )}
                {product.ageGroup === 'school-age' && (
                  <span className="absolute top-2 left-2 bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded">
                    School Age
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
                
                {/* Size options - with age-appropriate labels */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`px-2 py-1 text-xs rounded ${
                        selectedSize === size 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                      title={displaySize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                
                <p className="text-gray-500 text-sm capitalize mb-3">{product.category}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No products found for this category and age group.</p>
          </div>
        )}

        {/* Sizing Guide */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Kids Shoe Sizing Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-bold text-lg text-blue-600 mb-2">Toddler Sizes (3-10)</h3>
              <p className="text-gray-600">For children ages 1-4 years. Measure from heel to toe while standing.</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-bold text-lg text-blue-600 mb-2">Little Kid Sizes (10.5-13.5)</h3>
              <p className="text-gray-600">For children ages 4-8 years. Add thumb width for growing room.</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-bold text-lg text-blue-600 mb-2">Big Kid Sizes (1-7)</h3>
              <p className="text-gray-600">For children ages 8-12 years. Consider width for proper fit.</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
              View Complete Sizing Chart
            </button>
          </div>
        </div>

        {/* Growth and Care Tips */}
        <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Healthy Feet Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-green-700 mb-1">Measure Regularly</h3>
                <p className="text-gray-600">Children's feet grow quickly. Measure every 2-3 months to ensure proper fit.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-green-700 mb-1">Proper Support</h3>
                <p className="text-gray-600">Look for shoes with good arch support and heel cushioning for developing feet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-blue-600 text-white py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Join Our Kids Club!</h2>
          <p className="mb-6 max-w-lg mx-auto">Get exclusive offers, growth reminders, and kids' shoe tips delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row justify-center max-w-lg mx-auto gap-2">
            <input 
              type="email" 
              placeholder="Parent's email" 
              className="px-4 py-2 rounded-md text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-yellow-400 text-blue-800 font-medium px-6 py-2 rounded-md hover:bg-yellow-300 transition-colors duration-200">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsSection;
