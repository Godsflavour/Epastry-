import React from 'react';
import { useCart } from './CartContext';
import './cart.css';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Cart ({cart.length})</h2>
      <hr />
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <div>{item.name}</div>
                <div>{item.stock} in stock</div>
              </div>
              <div>${item.price}</div>
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="remove-button"
              >
                Remove
              </button>
              <input 
                type="number" 
                min={1} 
                value={item.quantity} 
                onChange={e => updateQuantity(item.id, parseInt(e.target.value) || 1)} 
                className="quantity-input"
              />
            </div>
          ))}
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <div>
              <span>Total</span>
              <span className="cart-total">${total}</span>
            </div>
            <button className="cart-button">Buy Now</button>
          </div>
        </>
      )}
    </div>
  );
}
