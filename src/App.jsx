"use client"
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { ShopPage } from "./components/page"
import Cart from "./components/cart"
import { CartProvider } from "./components/CartContext"
import "./components/style.css"
import Login from './components/Login';
import Signup from './components/Signup';

// Import Font Awesome components and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



function HomePage() {
  const [openFaq, setOpenFaq] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("Cakes")
  

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonialsData = [
    {
      id: 1,
      username: "janeokon",
      name: "Jane",
      text: "Amazing team, very personable and easy to work with. Produced all our box sizes perfectly for our new store. Couldn't have asked for more!",
      imageLeft: "/macroons.jpg",
      imageRight: "/cake2.png"
    },
    {
      id: 2,
      username: "mrbakerman",
      name: "Michael",
      text: "The cakes are always fresh and the delivery is super fast. My customers love the taste and packaging!",
      imageLeft: "/cake3.png",
      imageRight: "/cake4.png"
    },
    {
      id: 3,
      username: "sweettooth",
      name: "Ada",
      text: "I ordered pastries for my birthday and everyone was asking where I got them from. Highly recommend!",
      imageLeft: "/donuts.jpg",
      imageRight: "/eclair.jpg"
    }
  ];
  
  // Delivery locations data with colors
  const deliveryLocations = [
    {
      city: "Abuja",
      subtitle: "The Centre of Unity",
      image: "/Celebrating college graduation.png",
      color: "#007AFF" 
    },
    {
      city: "Calabar",
      subtitle: "The Tourism Capital",
      image: "/calabar.png",
      color: "#5856D6"
    },
    {
      city: "Lagos",
      subtitle: "The Centre of Excellence",
      image: "/Lagos.png",
      color: "#AF52DE" 
    },
    {
      city: "Port Harcourt",
      subtitle: "The Garden City",
      image: "/Port Harcourt.png",
      color: "#30B0C7" 
    },
  ]
  
  const [currentDeliveryIndex, setCurrentDeliveryIndex] = useState(0)
  const [fade, setFade] = useState(true)

  // Product data
  const productsData = [
    {
      id: 1,
      name: "Wedding Cake",
      price: "500.00",
      category: "Cakes",
      image: "/cake1.png",
      isNew: false,
    },
    {
      id: 2,
      name: "Birthday Red Velvet",
      price: "75.00",
      category: "Cakes",
      image: "/cake2.png",
      isNew: true,
    },
    {
      id: 3,
      name: "Mango Delight Cake",
      price: "60.00",
      category: "Cakes",
      image: "/cake3.png",
      isNew: false,
    },
    {
      id: 4,
      name: "Chocolate Fudge Cake",
      price: "85.00",
      category: "Cakes",
      image: "/cake4.png",
      isNew: true,
    },
     {
      id: 5,
      name: "Croissant",
      price: "3.50",
      category: "Pastries",
      image: "/croissant.jpg", 
      isNew: false,
    },
     {
      id: 6,
      name: "Macroons",
      price: "4.00",
      category: "Pastries",
      image: "/macroons.jpg", 
      isNew: false,
    },
     {
      id: 7,
      name: "Donuts",
      price: "5.50",
      category: "Pastries",
      image: "/donuts.jpg", 
      isNew: true,
    },
     {
      id: 8,
      name: "Eclair",
      price: "5.50",
      category: "Pastries",
      image: "/eclair.jpg", 
      isNew: true,
    },
  ];

  function handleFaqClick(id) {
    if (openFaq === id) {
      setOpenFaq("")
    } else {
      setOpenFaq(id)
    }
  }
  
  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  function handleDeliveryChange(idx) {
    if (idx === currentDeliveryIndex) return
    setFade(false)
    setTimeout(() => {
      setCurrentDeliveryIndex(idx)
      setFade(true)
    }, 250)
  }


  function handleCategoryClick(category) {
    setActiveCategory(category);
  }


  const filteredProducts = productsData.filter(product => product.category === activeCategory);


  const currentLocation = deliveryLocations[currentDeliveryIndex]

  return (
    <div className="page-container">
      <header className="header">
        <div className="logo">
          <img 
            src="/epastrylogo.png" 
            alt="Pastry Empire Logo" 
            width={40} 
            height={40} 
          />
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item active"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/shop">Shop</Link></li>
            <li className="nav-item"><Link to="/rewards">Rewards</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        
        <div className="auth-buttons">
          <Link to="/signup" className="signup-btn" style={{ textDecoration: 'none' }}>Sign Up</Link>
          <Link to="/login" className="login-btn" style={{ textDecoration: 'none' }}>Login</Link>
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <div className={menuOpen ? "hamburger open" : "hamburger"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/rewards">Rewards</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Delight in every bite</h1>
          <p>
            Discover the finest handcrafted pastries and cakes made with love and the finest ingredients.
          </p>
          <div className="hero-buttons">
            <button className="order-btn">Shop Now</button>
            <button className="menu-btn">Sell Now</button>
          </div>
          <div className="stats">
            <div className="stat-box">
              <h2>200+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="stat-box">
              <h2>20+</h2>
              <p>Pastry Variations</p>
            </div>
            <div className="stat-box">
              <h2>50<span>%</span></h2>
              <p>Home Deliveries</p>
            </div>
          </div>
        </div>
        <div className="hero-image hero-image-right">
          <img 
            src="/People enjoying pastries.png" 
            alt="" 
            width={500} 
            height={400} 
          />
        </div>
      </section>
      
      {/* Products Section */}
      <section className="products products-ref">
        <div className="products-header-row">
          <div>
            <h2 className="products-title">
              Our <span className="red-text">Products</span>
            </h2>
            <p className="products-subtitle">Enjoy your favorite cakes and pastries, anywhere.</p>
            <div className="products-categories">
              <button 
                className={`category-btn ${activeCategory === 'Cakes' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('Cakes')}
              >
                Cakes
              </button>
              <button 
                className={`category-btn ${activeCategory === 'Pastries' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('Pastries')}
              >
                Pastries
              </button>
            </div>
          </div>
        </div>
        <div className="products-grid-ref">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card-ref">
              <div className="product-image-ref">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p className="price-ref">${product.price}</p>
              <button className="buy-btn-ref">Buy</button>
            </div>
          ))}
        </div>
      </section>
      
      {/* Shop By Occasion */}
      <section className="occasion-modern">
        <h2 className="occasion-title">Shop By Occasion</h2>
        <p className="occasion-subtitle">Enjoy your favorite cakes and pastries on your special day.</p>
        <div className="occasion-pill-bg">
          <div className="occasion-images-row">
            <div className="occasion-image-card">
              <img src="/wedding1.jpg" alt="Weddings"/>
            </div>
            <div className="occasion-image-card">
              <img src="/birthday.jpg" alt="Birthdays" />
            </div>
            <div className="occasion-image-card">
              <img src="/party.jpg" alt="Parties"/>
            </div>
            <div className="occasion-image-card">
              <img src="/self-love.jpg" alt="Self-love"/>
            </div>
          </div>
        </div>
        <button className="occasion-shop-btn">Shop Now</button>
      </section>
      
      {/* Delivery Section with Dynamic Colors */}
      <section 
        className="delivery-modern"
        style={{ background: currentLocation.color }} // Dynamic background color
      >
        <div className="delivery-header">
          <span className="delivery-title">
            We deliver to <span role="img" aria-label="truck">🚚</span> <span role="img" aria-label="box">📦</span>
          </span>
        </div>
        <div className={`delivery-center fade-${fade ? "in" : "out"}`}>
          <div>
            <h2 className="delivery-city">{currentLocation.city}</h2>
            <p className="delivery-subtitle">{currentLocation.subtitle}</p>
          </div>
          <img
            className="delivery-illustration"
            src={currentLocation.image}
            alt="Delivery illustration"
          />
        </div>
        <div className="delivery-pagination">
          {deliveryLocations.map((loc, idx) => (
            <button
              key={loc.city}
              className={idx === currentDeliveryIndex ? "active" : ""}
              onClick={() => handleDeliveryChange(idx)}
              style={{ 
                borderColor: "#fff",
                ...(idx === currentDeliveryIndex && { background: "#fff", color: currentLocation.color }) 
              }}
            >
              {idx + 1}
            </button>
          ))}
        </div>
        <div className="delivery-sparkle">
          <span role="img" aria-label="sparkle">⭐</span>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose <span className="red-text">Epastry Empire</span></h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-number">1</div>
            <h3>Nationwide Delivery</h3>
            <p>We deliver to all locations in Nigeria with delivery time of 24-48 hours via Pastry Empire.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-number">2</div>
            <h3>Great Taste</h3>
            <p>Unique and delicious taste in every bite with a unique recipe that's been perfected.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-number">3</div>
            <h3>Gift Offers</h3>
            <p>Our pastries are also affordable, so you can enjoy them without breaking the bank.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-number">4</div>
            <h3>Secure Payments</h3>
            <p>All payments are processed through our flexible payment gateway.</p>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="testimonials testimonials-modern">
        <div className="testimonials-flex-row">
          {/* Left Column */}
          <div className="testimonials-left-col">
            <h2 className="testimonials-title">Don't just take<br />our word for it</h2>
            <div className="testimonials-subtext">
              <p>Big brands.<br />Rising stars.<br />Your favorites.<br />Hear from our customers.</p>
            </div>
            <div className="testimonials-arrows-row">
              <button
                className="arrow-btn-custom left"
                onClick={() => setTestimonialIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1))}
                aria-label="Previous testimonial"
              >
                <span>&larr;</span>
              </button>
              <button
                className="arrow-btn-custom right"
                onClick={() => setTestimonialIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1))}
                aria-label="Next testimonial"
              >
                <span>&rarr;</span>
              </button>
            </div>
          </div>

          {/* Carousel - show prev, current, next */}
          <div className="testimonials-carousel-outer">
            <div
              className="testimonials-carousel-inner"
              style={{
                transform: `translateX(calc(50% - ${(testimonialIndex + 0.5) * 340}px))`,
                transition: 'transform 0.6s cubic-bezier(.77,0,.18,1)'
              }}
            >
              {testimonialsData.map((testimonial, idx) => {
                // Calculate position relative to the current index
                let position = idx - testimonialIndex;
                if (position < -Math.floor(testimonialsData.length / 2)) position += testimonialsData.length;
                if (position > Math.floor(testimonialsData.length / 2)) position -= testimonialsData.length;

                let cardClass = "testimonial-carousel-card-modern";
                if (position === 0) cardClass += " active";
                else if (position === -1) cardClass += " prev";
                else if (position === 1) cardClass += " next";

                return (
                  <div key={testimonial.id} className={cardClass}>
                    <div className="testimonial-main-card-modern">
                      <div className="testimonial-username">@{testimonial.username}</div>
                      <div className="testimonial-text">{testimonial.text}</div>
                      <div className="testimonial-name">{testimonial.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Progress Indicator */}
            <div className="testimonial-progress-modern">
              {testimonialsData.map((_, idx) => (
                <span key={idx} className={`progress-dot-modern${testimonialIndex === idx ? ' active' : ''}`}></span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Rewards Section - Replaced with RewardsCarousel */}
      <section className="rewards">
        <RewardsCarousel />
      </section>
      
      {/* About Us */}
      <section className="about">
        <div className="about-image">
          <img 
            src="/about us.png" 
            alt="Bakery display" 
            width={500} 
            height={300} 
          />
        </div>
        
        <div className="about-content">
          <h2>About <span className="red-text">Us</span></h2>
          <p>Pastry Empire is a premium bakery and pastry shop that specializes in cakes and pastries. We are passionate about creating delicious treats that bring joy to our customers. Our experienced bakers use only the finest ingredients to craft our delectable creations.</p>
          <p>All of our recipes are carefully developed to bring out the best flavors and textures. We take pride in our work and strive to exceed your expectations with every bite.</p>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq">
        <h2>FAQ's (<span className="red-text">Frequently Asked Questions</span>)</h2>
        
        <div className="faq-list">
          <div className="faq-item">
            <div className="faq-question" onClick={() => handleFaqClick("faq1")}>
              <h3>How long does delivery take?</h3>
              <div className={openFaq === "faq1" ? "faq-icon open" : "faq-icon"}>+</div>
            </div>
            {openFaq === "faq1" && (
              <div className="faq-answer">
                <p>Delivery typically takes 24-48 hours depending on your location. We ensure all pastries arrive fresh.</p>
              </div>
            )}
          </div>
          
          <div className="faq-item">
            <div className="faq-question" onClick={() => handleFaqClick("faq2")}>
              <h3>Do you offer custom cakes?</h3>
              <div className={openFaq === "faq2" ? "faq-icon open" : "faq-icon"}>+</div>
            </div>
            {openFaq === "faq2" && (
              <div className="faq-answer">
                <p>Yes, we offer custom cake designs for all occasions. Contact us with your requirements.</p>
              </div>
            )}
          </div>
          
          <div className="faq-item">
            <div className="faq-question" onClick={() => handleFaqClick("faq3")}>
              <h3>What payment methods do you accept?</h3>
              <div className={openFaq === "faq3" ? "faq-icon open" : "faq-icon"}>+</div>
            </div>
            {openFaq === "faq3" && (
              <div className="faq-answer">
                <p>We accept all major credit cards, bank transfers, and mobile payments.</p>
              </div>
            )}
          </div>
          
          <div className="faq-item">
            <div className="faq-question" onClick={() => handleFaqClick("faq4")}>
              <h3>Are your pastries made fresh daily?</h3>
              <div className={openFaq === "faq4" ? "faq-icon open" : "faq-icon"}>+</div>
            </div>
            {openFaq === "faq4" && (
              <div className="faq-answer">
                <p>Yes, all our pastries are baked fresh daily using premium ingredients.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

// RewardsCarousel kini
const RewardsCarousel = () => {
  const [activeCard, setActiveCard] = useState(0);


  const rewardCards = [
    { image: '/rewards1.png' },
    { image: '/reward 2.png' },
    { image: '/reward 3.png' },
    { image: '/reward 4.png' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 2) % rewardCards.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [rewardCards.length]);

  const handleCardClick = () => {
    setActiveCard((prev) => (prev + 2) % rewardCards.length);
  };

  return (
    <div className="rewards-carousel-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="text-center mb-6" style={{ marginBottom: 32 }}>
        <h2 className="rewards-title" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2.2rem', marginBottom: 8 }}>Earn Rewards!</h2>
        <p style={{ marginBottom: 4 }}>Get rewarded for every bite! 🍰✨</p>
        <p style={{ marginBottom: 4 }}>With Pastry Empire Rewards, you earn points on every purchase and redeem them for exclusive discounts.</p>
      </div>
      <div className="rewards-carousel-card-wrapper" style={{ width: 300, height: 384, maxWidth: '90vw', margin: '0 auto', borderRadius: 32, overflow: 'hidden', boxShadow: '0 8px 32px rgba(153,4,23,0.10)', background: '#fee2e2', cursor: 'pointer' }}>
        <img
          src={rewardCards[activeCard].image}
          alt={`Reward card ${activeCard + 1}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onClick={handleCardClick}
        />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <footer className="footer-new">
          <div className="footer-left">
            <div className="footer-logo">
              <img 
                src="/epastrylogo.png" 
                alt="Pastry Empire Logo" 
                width={80} 
                height={80} 
              />
            </div>
            <div className="footer-social-links">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="footer-copyright">
              <p>© 2025 Pastry Empire. All rights reserved.</p>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-column">
              <h3>Menu</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Store</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Work Hours</h3>
              <p>Weekdays: 9am - 4pm</p>
              <p>Weekends: 12pm - 3pm</p>
            </div>
          </div>
          <div className="footer-powered-by">
            <p>Powered by Pastry Empire | Delicious cakes and Pastries</p>
          </div>
        </footer>
      </Router>
    </CartProvider>
  );
}