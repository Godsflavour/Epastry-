import React, { useState } from "react";
import "./style.css";
import "./shop.css";
import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';

const productsByCategory = {
  Cakes: [
    { name: "Whipped Cream Cake", price: 10, image: "/whipped cream cake.jpg", rating: 5, reviews: 90, stock: 100 },
    { name: "Chocolate Fudge Cake", price: 12, image: "/chocolate fudge cake.jpg", rating: 4, reviews: 50, stock: 80 },
    { name: "Red Velvet Cake", price: 15, image: "/red velvet cake.jpg", rating: 5, reviews: 120, stock: 60 },
    { name: "Mango Delight Cake", price: 13, image: "/mango cake.jpg", rating: 4, reviews: 70, stock: 40 },
    { name: "Classic Vanilla Cake", price: 9, image: "/vanilla cake.jpg", rating: 4, reviews: 30, stock: 30 },
    { name: "Strawberry Dream Cake", price: 14, image: "/Strawberry Dream Cake.jpg", rating: 5, reviews: 80, stock: 20 },
  ],
  Snacks: [
    { name: "Cheese Croissant", price: 5, image: "/croissant.jpg", rating: 4, reviews: 40, stock: 50 },
    { name: "Mini Sausage Roll", price: 3, image: "/sausage rolls.jpg", rating: 4, reviews: 25, stock: 60 },
    { name: "Chicken Pie", price: 6, image: "/chicken pie.jpg", rating: 5, reviews: 35, stock: 30 },
    { name: "Veggie Puff", price: 4, image: "/vegie puffs.jpg", rating: 4, reviews: 20, stock: 40 },
    { name: "Ham & Cheese Roll", price: 5, image: "/hac.jpg", rating: 5, reviews: 18, stock: 25 },
    { name: "Spicy Meat Pie", price: 6, image: "/meatpie.jpg", rating: 4,   reviews: 22, stock: 15 },
  ],
  Desserts: [
    { name: "Chocolate Mousse", price: 7, image: "/Chocolate Mousse.jpg", rating: 5, reviews: 60, stock: 30 },
    { name: "Fruit Tart", price: 8, image: "/Fruit Tart.jpg", rating: 4, reviews: 45, stock: 20 },
    { name: "Lemon Cheesecake", price: 9, image: "/Lemon Cheesecake.jpg", rating: 5, reviews: 55, stock: 25 },
    { name: "Tiramisu", price: 10, image: "/Tiramisu.jpg", rating: 5, reviews: 70, stock: 18 },
    { name: "Panna Cotta", price: 8, image: "/Panna Cotta.jpg", rating: 4, reviews: 30, stock: 22 },
    { name: "Berry Parfait", price: 7, image: "/Berry Parfait.jpg", rating: 4, reviews: 28, stock: 16 },
  ],
  Others: [
    { name: "Macarons", price: 6, image: "/macroons.jpg", rating: 5, reviews: 80, stock: 40 },
    { name: "Donuts", price: 5, image: "/donuts.jpg", rating: 4, reviews: 50, stock: 35 },
    { name: "Eclair", price: 7, image: "/eclair.jpg", rating: 5, reviews: 60, stock: 20 },
    { name: "Baklava", price: 8, image: "/b.jpg", rating: 4, reviews: 18, stock: 10 },
    { name: "Apple Pie", price: 9, image: "/apple pie.jpg", rating: 5, reviews: 25, stock: 12 },
    { name: "Cinnamon Roll", price: 6, image: "/cr.jpg", rating: 4, reviews: 30, stock: 15 },
  ],
};

export function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("Cakes");
  const [profileOpen, setProfileOpen] = useState(false);
  const products = productsByCategory[activeCategory];
  const { cart, addToCart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  function handleLogout() {
    setProfileOpen(false);
    navigate('/login');
  }

  return (
    <div className="page-container shop-bg">
      {/* Header */}
      <header className="header shop-header shop-header-icons">
        <div className="logo">
          <img src="/epastrylogo.png" alt="Pastry Empire Logo" className="shop-logo" />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item active"><a href="/shop">Shop</a></li>
            <li className="nav-item"><a href="/rewards">Rewards</a></li>
            <li className="nav-item"><a href="/about">About</a></li>
            <li className="nav-item"><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="shop-header-right-icons">
          <span className="shop-header-icon" style={{ position: 'relative' }}>
            {/* User icon */}
            <span onClick={() => setProfileOpen(v => !v)} style={{ cursor: 'pointer' }}>
              <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>
            </span>
            {profileOpen && (
              <div style={{ position: 'absolute', top: 36, right: 0, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderRadius: 8, minWidth: 180, zIndex: 10, padding: 16 }}>
                <div style={{ marginBottom: 12, fontWeight: 600 }}>My Account</div>
                <div style={{ marginBottom: 16, fontSize: 14, color: '#888' }}>user@example.com</div>
                <button onClick={handleLogout} style={{ background: '#dc2626', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 20px', fontSize: 15, cursor: 'pointer', width: '100%' }}>Logout</button>
              </div>
            )}
          </span>
          <span className="shop-header-icon">
            {/* Heart icon */}
            <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 21s-6-4.35-9-8.5C-1.5 7.5 4.5 3 8.5 7.5c2.5 2.5 3.5 2.5 6 0C19.5 3 25.5 7.5 21 12.5 18 16.65 12 21 12 21z"/></svg>
          </span>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="shop-header-icon shop-header-cart">
              {/* Cart icon */}
              <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 2h2l2.68 13.39A2 2 0 0 0 8.62 17h8.76a2 2 0 0 0 1.94-1.61L22 6H6"/></svg>
              <span className="shop-header-cart-badge">{cartCount}</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="shop-hero">
        <div className="shop-hero-inner">
          <img src="/strawberry shop.jpg" alt="Celebration" className="shop-hero-img" />
          <div className="shop-hero-center">
            <h1 className="shop-hero-title">Freshly Baked,<br />Delivered to You!</h1>
            <p className="shop-hero-desc">Discover freshly baked pastries crafted with love<br />and the finest ingredients.</p>
            <div className="shop-hero-search-row">
              <input type="text" placeholder="Search Pastry" className="shop-hero-search" />
              <span className="shop-hero-search-icon">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </span>
            </div>
          </div>
          <img src="pink cake.jpg" alt="Cake Celebration" className="shop-hero-img" />
        </div>
      </section>

      {/* Category Filters */}
      <div className="shop-category-row">
        {Object.keys(productsByCategory).map(cat => (
          <button
            key={cat}
            className={"category-btn" + (activeCategory === cat ? " active" : "")}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recommended Section */}
      <section className="products-ref shop-products-section">
        <div className="products-header-row shop-products-header-row">
          <div>
            <h2 className="products-title shop-products-title">
              Recommended <span className="shop-products-title-accent">For You</span>
            </h2>
          </div>
        </div>
        <div className="products-grid-ref shop-products-grid">
          {products.map((prod, idx) => (
            <div className="product-card-ref shop-product-card" key={idx}>
              <div className="product-image-ref shop-product-image">
                <img src={prod.image} alt={prod.name} />
                <span className="shop-product-stock">{prod.stock}</span>
              </div>
              <h3>{prod.name}</h3>
              <div className="price-ref shop-product-price">${prod.price}</div>
              <div className="shop-product-rating">
                {Array(prod.rating).fill(0).map((_, i) => <span key={i}>★</span>)}
                <span className="shop-product-reviews">({prod.reviews})</span>
              </div>
              <button className="buy-btn-ref shop-product-btn" onClick={() => addToCart({ ...prod, id: prod.name })}>Add to cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer shop-footer">
        <div className="footer-content shop-footer-content">
        </div>
      </footer>
    </div>
  );
}

