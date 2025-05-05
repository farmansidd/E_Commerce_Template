import React from 'react';
import { useCart } from '../../Context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4 mt-5">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map(item => (
              <li key={item.id} className="py-6 flex items-start hover:bg-gray-50 transition-colors">
                {/* Add image display here */}
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md mr-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Size: {item.size || 'One Size'} • Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="text-lg font-bold text-red-600">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <div className="mt-2 flex items-center space-x-2">
                    {item.colors?.map((color, index) => (
                      <div 
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-gray-400 hover:text-red-600 transition-colors"
                  aria-label="Remove item"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-2xl font-bold text-gray-800">Total:</span>
                <span className="ml-2 text-2xl font-bold text-red-600">${total.toFixed(2)}</span>
              </div>
              <div className="space-x-4">
                <button
                  onClick={clearCart}
                  className="px-6 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Clear Cart
                </button>
                <button
                  className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
