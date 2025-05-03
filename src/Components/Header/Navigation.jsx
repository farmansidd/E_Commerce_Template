import React from 'react';
import { useCart } from '../../Context/CartContext';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="navigation">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      
      {/* Hamburger Menu */}
      <button 
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Navigation Items */}
      <div className={`nav-items ${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul>
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active" : ""}
              end
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/products" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      
      <div className="nav-right">
        <div className="cart-icon">
          <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </NavLink>
        </div>
        <div className="login-btn">
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;