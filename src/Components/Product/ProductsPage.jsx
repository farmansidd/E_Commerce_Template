import React, { useState } from 'react';

import { useNavigate, Outlet } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';


const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedSize, setSelectedSize] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const Navigate = useNavigate();

  const { addToCart } = useCart();
  
  // Fix the navigation paths
  const handlePath = () => {
    Navigate('/products/kids'); // Changed from '/Product/kidSection.jsx'
  };
  const handlePathMen = () => {
    Navigate('/products/men'); // This is correct
  };
  const handlePathWomen = () => {
    Navigate('/products/women'); // This is correct
  };

  // Updated shoe products data - removed the nested array
  const products = [
    {
      id: 1,
      name: "Classic Running Sneakers",
      price: 89.99,
      category: "athletic",
      rating: 4.7,
      image: process.env.PUBLIC_URL + "/images/Shose/heel1.jpg",
      colors: ["#ffffff", "#000000", "#ff0000"],
      sizes: [7, 8, 9, 10, 11, 12]
    },
    {
      id: 2,
      name: "Casual Canvas Slip-Ons",
      price: 49.99,
      category: "casual",
      rating: 4.3,
      image: process.env.PUBLIC_URL + "/images/Shose/flat1.jpg",
      colors: ["#1e90ff", "#f5f5dc", "#ffa500"],
      sizes: [6, 7, 8, 9, 10]
    },
    {
      id: 3,
      name: "Hiking Trail Boots",
      price: 129.99,
      category: "outdoor",
      rating: 4.8,
      image: process.env.PUBLIC_URL + "/images/Shose/boot1.jpg",
      colors: ["#8b4513", "#556b2f"],
      sizes: [8, 9, 10, 11, 12]
    },
    {
      id: 4,
      name: "Stylish Suede Loafers",
      price: 119.99,
      category: "casual",
      rating: 4.4,
      image: process.env.PUBLIC_URL + "/images/Shose/sneaker1.jpg",
      colors: ["#a0522d", "#000000", "#808080"],
      sizes: [7, 8, 9, 10, 11]
    },
    {
      id: 5,
      name: "Performance Basketball Shoes",
      price: 149.99,
      category: "athletic",
      rating: 4.9,
      image: process.env.PUBLIC_URL + "/images/Shose/sandal1.jpg",
      colors: ["#ff0000", "#000000", "#0000ff"],
      sizes: [8, 9, 10, 11, 12, 13]
    },
    {
      id: 6,
      name: "Formal Leather Wingtips",
      price: 199.99,
      category: "formal",
      rating: 4.5,
      image: process.env.PUBLIC_URL + "/images/Shose/heel2.jpg",
      colors: ["#2c3e50", "#34495e"],
      sizes: [8, 9, 10]
    },
    {
      id: 7,
      name: "Lightweight Tennis Shoes",
      price: 109.99,
      category: "athletic",
      rating: 4.6,
      image: process.env.PUBLIC_URL + "/images/Shose/featured1.jpg",
      colors: ["#ffffff", "#adff2f", "#00ffff"],
      sizes: [6, 7, 8, 9, 10, 11]
    },
    {
      id: 8,
      name: "Waterproof Rain Boots",
      price: 79.99,
      category: "outdoor",
      rating: 4.2,
      image: process.env.PUBLIC_URL + "/images/Shose/featured2.jpg",
      colors: ["#000000", "#8a2be2", "#228b22"],
      sizes: [6, 7, 8, 9, 10]
    },
    {
      id: 9,
      name: "Designer Dress Oxfords",
      price: 229.99,
      category: "formal",
      rating: 4.8,
      image: process.env.PUBLIC_URL + "/images/Shose/Shose 9.jpg",
      colors: ["#800000", "#000000"],
      sizes: [8, 9, 10, 11]
    },
    {
      id: 10,
      name: "Comfortable Walking Sandals",
      price: 59.99,
      category: "casual",
      rating: 4.1,
      image: process.env.PUBLIC_URL + "/images/Shose/Shose10.jpg",
      colors: ["#8b4513", "#f5deb3", "#000000"],
      sizes: [6, 7, 8, 9, 10]
    },
    {
      id: 11,
      name: "Trendy Platform Sneakers",
      price: 94.99,
      category: "casual",
      rating: 4.4,
      image: process.env.PUBLIC_URL + "/images/Shose/Shose11.jpg",
      colors: ["#ffffff", "#ffc0cb", "#000000"],
      sizes: [5, 6, 7, 8, 9]
    },
    {
      id: 12,
      name: "Premium Italian Loafers",
      price: 249.99,
      category: "formal",
      rating: 4.9,
      image: process.env.PUBLIC_URL + "/images/Shose/Shose12.jpg",
      colors: ["#8b4513", "#000000"],
      sizes: [7, 8, 9, 10, 11]
    },
    {
      id: 13,
      name: "Lightweight Trail Runners",
      price: 119.99,
      category: "athletic",
      rating: 4.7,
      image: process.env.PUBLIC_URL + "/images/Shose/Shose13.jpg",
      colors: ["#ff4500", "#4682b4", "#000000"],
      sizes: [7, 8, 9, 10, 11, 12]
    },
    {
      id: 14,
      name: "Classic Chelsea Boots",
      price: 159.99,
      category: "casual",
      rating: 4.6,
      image: process.env.PUBLIC_URL + "/images/Shose/Shose14.jpeg",
      colors: ["#000000", "#8b4513"],
      sizes: [7, 8, 9, 10, 11]
    },
    {
      id: 15,
      name: "Ergonomic Work Boots",
      price: 139.99,
      category: "outdoor",
      rating: 4.5,
      image: process.env.PUBLIC_URL + "/images/Shose/Shose15.jpeg",
      colors: ["#8b4513", "#f5deb3"],
      sizes: [8, 9, 10, 11, 12, 13]
    },
    {
      id: 16,
      name: "Designer High Heels",
      price: 179.99,
      category: "formal",
      rating: 4.3,
      image: "/images/Shose/Shose16.jpg",
      colors: ["#ff0000", "#000000", "#ffd700"],
      sizes: [5, 6, 7, 8, 9]
    },
    {
      id: 17,
      name: "Skate Park Sneakers",
      price: 74.99,
      category: "casual",
      rating: 4.4,
      image: process.env.PUBLIC_URL + "/images/Shose/Shose17.jpg",
      colors: ["#000000", "#1e90ff", "#ffffff"],
      sizes: [6, 7, 8, 9, 10, 11]
    },
    {
      id: 18,
      name: "Leather Combat Boots",
      price: 149.99,
      category: "casual",
      rating: 4.7,
      image: "/images/Shose/Shose/Shose18.jpg",
      colors: ["#000000", "#8b4513"],
      sizes: [6, 7, 8, 9, 10]
    },
    {
      id: 19,
      name: "Luxury Velvet Slippers",
      price: 89.99,
      category: "casual",
      rating: 4.2,
      image: "/images/Shose/Shose/Shose19.jpg",
      colors: ["#800080", "#000080", "#8b0000"],
      sizes: [7, 8, 9, 10, 11]
    },
    {
      id: 20,
      name: "Professional Golf Shoes",
      price: 169.99,
      category: "athletic",
      rating: 4.8,
      image: "/images/Shose/Shose/Shose20.jpg",
      colors: ["#ffffff", "#000000"],
      sizes: [8, 9, 10, 11, 12]
    },
    {
      id: 21,
      name: "Classic Ballet Flats",
      price: 69.99,
      category: "casual",
      rating: 4.5,
      image: "/images/Shose/Shose/Shose21.jpg",
      colors: ["#000000", "#ffc0cb", "#add8e6"],
      sizes: [5, 6, 7, 8, 9]
    },
    {
      id: 22,
      name: "Trail Hiking Sandals",
      price: 99.99,
      category: "outdoor",
      rating: 4.6,
      image: "/images/Shose/Shose/Shose22.jpg",
      colors: ["#556b2f", "#8b4513", "#000000"],
      sizes: [7, 8, 9, 10, 11]
    },
    {
      id: 23,
      name: "Winter Insulated Boots",
      price: 179.99,
      category: "outdoor",
      rating: 4.9,
      image: "/images/Shose/Shose/Shose23.jpg",
      colors: ["#000000", "#696969", "#ffffff"],
      sizes: [7, 8, 9, 10, 11, 12]
    },
    {
      id: 24,
      name: "Retro Basketball Sneakers",
      price: 129.99,
      category: "athletic",
      rating: 4.7,
      image: "/images/Shose/Shose/Shose24.jpg",
      colors: ["#ff0000", "#ffffff", "#000000"],
      sizes: [8, 9, 10, 11, 12, 13]
    },
    {
      id: 25,
      name: "Patent Leather Dress Shoes",
      price: 189.99,
      category: "formal",
      rating: 4.5,
      image: "/images/Shose/Shose/Shose25.jpg",
      colors: ["#000000", "#8b0000"],
      sizes: [8, 9, 10, 11]
    },
    {
      id: 26,
      name: "Breathable Running Shoes",
      price: 119.99,
      category: "athletic",
      rating: 4.8,
      image: "/images/Shose/Shose/Shose26.jpg",
      colors: ["#00bfff", "#ff4500", "#32cd32"],
      sizes: [7, 8, 9, 10, 11, 12]
    },
    {
      id: 27,
      name: "Classic Penny Loafers",
      price: 159.99,
      category: "formal",
      rating: 4.6,
      image: "/images/Shose/Shose/Shose27.jpg",
      colors: ["#8b4513", "#000000"],
      sizes: [7, 8, 9, 10, 11]
    },
    {
      id: 28,
      name: "Stylish Ankle Booties",
      price: 139.99,
      category: "casual",
      rating: 4.4,
      image: "/images/Shose/Shose/Shose28.jpg",
      colors: ["#000000", "#8b4513", "#808080"],
      sizes: [5, 6, 7, 8, 9, 10]
    },
    {
      id: 29,
      name: "Lightweight Gym Trainers",
      price: 99.99,
      category: "athletic",
      rating: 4.5,
      image: "/images/Shose/Shose/Shose29.jpg",
      colors: ["#000000", "#ff1493", "#00bfff"],
      sizes: [6, 7, 8, 9, 10, 11]
    },
    {
      id: 30,
      name: "Handcrafted Leather Brogues",
      price: 229.99,
      category: "formal",
      rating: 4.9,
      image: "/images/Shose/Shose/Shose30.jpg",
      colors: ["#8b4513", "#000000", "#a0522d"],
      sizes: [8, 9, 10, 11]
    }
  ]

  // Add size selection handler
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Sort products based on selection
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'featured') {
      return b.featured - a.featured;
    } else if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });

  // Get unique categories
  const categories = ['all', ...new Set(products.map(product => product.category))];

  return ( <>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-gray-800 flex justify-center items-center overflow-hidden">
        <img 
          src="/images/banners/shoe-banner.jpg" 
          alt="Shoe Collection" 
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-white text-5xl font-bold uppercase tracking-wider mb-4">
            Step Into Style
          </h1>
          <p className="text-xl text-gray-200 mb-6">Discover Our Premium Footwear Collection</p>
          <div className="mt-4 w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 text-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                  activeCategory === category 
                  ? 'bg-red-600 text-white'  // Changed from blue to red
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
              className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" // Changed focus ring to red
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
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`px-2 py-1 text-xs rounded ${
                        selectedSize === size 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      US {size}
                    </button>
                  ))}
                </div>
                
                <p className="text-gray-500 text-sm capitalize mb-3">{product.category}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-red-600">${product.price.toFixed(2)}</span>
                  <button 
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors "
                    onClick={() => {
                      if (selectedSize) {
                        addToCart(product, selectedSize);
                        setShowMessage(true);
                        setTimeout(() => setShowMessage(false), 3000);
                      } else {
                        alert('Please select a size before adding to cart.');
                      }
                    }}
                  >
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
            <p className="text-gray-500 text-lg">No products found for this category.</p>
          </div>
        )}

        {/* Toggle message */}
        {showMessage && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
            Product added to cart!
          </div>
        )}

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">Previous</button>
            <button className="px-3 py-1 rounded bg-red-600 text-white">1</button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">2</button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">3</button>
            <span className="px-3 py-1">...</span>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">Next</button>
          </nav>
        </div>
      </div>
      <div className="container py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Collections</h1>
        
        <div className="row g-4">
            <div className="col-md-4">
                <div className="card h-100 shadow-lg hover:shadow-xl transition duration-300">
                    <img src="/images/Shose/men-collection.jpg" className="card-img-top h-64 object-cover" alt="Men's Fashion" />
                    <div className="card-body p-6">
                        <h2 className="text-2xl font-bold mb-3">Men's Collection</h2>
                        <p className="text-gray-600 mb-4">
                            Discover our premium selection of men's wear. Perfect for every occasion from casual to formal.
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200" onClick={handlePathMen}>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card h-100 shadow-lg hover:shadow-xl transition duration-300">
                    <img src="/images/Shose/women-collection.jpg" className="card-img-top h-64 object-cover" alt="Women's Fashion" />
                    <div className="card-body p-6">
                        <h2 className="text-2xl font-bold mb-3">Women's Collection</h2>
                        <p className="text-gray-600 mb-4">
                            Explore our trendy women's fashion collection. Find the perfect outfit for any event.
                        </p>
                        <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition duration-200" onClick={handlePathWomen}>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

          
            <div className="col-md-4">
                <div className="card h-100 shadow-lg hover:shadow-xl transition duration-300">
                    <img src="/images/Shose/kids-collection.jpg" className="card-img-top h-64 object-cover" alt="Kids Fashion" />
                    <div className="card-body p-6">
                        <h2 className="text-2xl font-bold mb-3">Kids' Collection</h2>
                        <p className="text-gray-600 mb-4">
                            Adorable and comfortable clothing for kids. Quality materials for your little ones.
                        </p>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200" onClick={handlePath}>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  
    <Outlet />
  </>
  );
}

export default ProductsPage;
