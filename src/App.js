import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUser, FiUsers, FiCalendar, FiStar, FiMessageSquare } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import prototype1 from './assets/prototype1.png';
import prototype2 from './assets/prototype2.png';
import prototype3 from './assets/prototype3.png';
import prototype4 from './assets/prototype4.png';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah K.",
      role: "Music Festival Lover",
      content: "I've met my concert squad through JoinIn! No more going to events alone.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael T.",
      role: "Sports Fan",
      content: "Found great people to go to games with. The app is super easy to use!",
      rating: 4
    },
    {
      id: 3,
      name: "Priya M.",
      role: "Art Enthusiast",
      content: "As someone new to the city, JoinIn helped me make friends with similar interests.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Create 3 events per month",
        "Message up to 10 users",
        "Basic event discovery"
      ],
      color: "bg-white"
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "/month",
      features: [
        "Unlimited events",
        "Unlimited messaging",
        "Priority in search results",
        "Advanced filters",
        "Exclusive event invites"
      ],
      color: "bg-lavender",
      popular: true
    },
    {
      name: "Annual",
      price: "$89.99",
      period: "/year",
      features: [
        "All Premium features",
        "2 months free",
        "VIP customer support",
        "Early access to new features"
      ],
      color: "bg-white"
    }
  ];

  const prototypes = [
    {
      id: 1,
      image: prototype2,
      title: "Event Discovery",
      description: "Browse upcoming events near you"
    },
    {
      id: 2,
      image: prototype4,
      title: "Chatting System",
      description: "Talk with your squads"
    },
    {
      id: 3,
      image: prototype3,
      title: "Profile Management",
      description: "Showcase your interests and preferences"
    }
  ];

  return (
    <div className="App">
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="header"
      >
        <div className="container">
          <div className="nav-container">
            <motion.a 
              href="#"
              className="logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >
              JoinIn
            </motion.a>
            
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="nav-link"
                  whileHover={{ 
                    scale: 1.05,
                    color: 'var(--lavender)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => scrollToSection(e, item.href)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="nav-button"
                onClick={(e) => scrollToSection(e, '#download')}
              >
                Get Started
              </motion.button>
            </nav>

            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}></div>
            </button>
          </div>
        </div>
      </motion.header>

      <main className="main-content">
        <section className="hero-section">
          <div className="container">
            <div className="hero-grid">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-content"
              >
                <h1>Find Your <span>Event Squad</span> with JoinIn</h1>
                <p className="subtitle">Never go to events alone again. Connect with like-minded people who share your interests.</p>
                <div className="cta-buttons">
                  <motion.a 
                    href="#download"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="download-button app-store"
                    onClick={(e) => scrollToSection(e, '#download')}
                  >
                    <FaApple size={20} />
                    <span>Download on App Store</span>
                  </motion.a>
                  <motion.a 
                    href="#download"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="download-button play-store"
                    onClick={(e) => scrollToSection(e, '#download')}
                  >
                    <FaGooglePlay size={20} />
                    <span>Get it on Google Play</span>
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="app-showcase"
              >
                <img 
                  src={prototype1} 
                  alt="JoinIn App" 
                  className="app-screen"
                />
                <motion.div 
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="floating-orb"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="features" className="for-section">
          <div className="container">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Who JoinIn Is For
            </motion.h2>
            <div className="for-cards">
              {[
                {
                  icon: <FiUser size={40} />,
                  title: "Solo Attendees",
                  description: "People who don't want to go to events alone but don't have friends with the same interests"
                },
                {
                  icon: <FiUsers size={40} />,
                  title: "New in Town",
                  description: "Those who recently moved and want to meet people through shared activities"
                },
                {
                  icon: <FiCalendar size={40} />,
                  title: "Event Enthusiasts",
                  description: "People who attend lots of events and want to expand their social circle"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="for-card glass-card"
                >
                  <div className="for-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials-section">
          <div className="container">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What Our Users Are Saying
            </motion.h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="testimonial-card glass-card"
                >
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        fill={i < testimonial.rating ? "#FFA500" : "none"} 
                        color="#FFA500" 
                      />
                    ))}
                  </div>
                  <p className="testimonial-content">"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="prototypes-section">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              How JoinIn Works
            </motion.h2>
            <div className="prototypes-container">
              {prototypes.map((prototype, index) => (
                <motion.div
                  key={prototype.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card prototype-card"
                >
                  <div className="prototype-header">
                    <div className="prototype-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <h3>{prototype.title}</h3>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="prototype-image-container"
                  >
                    <img 
                      src={prototype.image} 
                      alt={prototype.title}
                      className="prototype-image"
                    />
                  </motion.div>
                  <p className="prototype-description">{prototype.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Choose Your Plan
            </motion.h2>
            <div className="pricing-cards">
              {pricingPlans.map((plan, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`pricing-card ${plan.color} ${plan.popular ? 'popular-plan' : ''}`}
                >
                  {plan.popular && <div className="popular-badge">Most Popular</div>}
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span>{plan.price}</span>
                    {plan.period && <small>{plan.period}</small>}
                  </div>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={plan.popular ? 'primary-button' : 'secondary-button'}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="download-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="download-content"
            >
              <h2>Get JoinIn Today</h2>
              <p>Available on both iOS and Android platforms</p>
              <div className="download-buttons">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="download-button app-store"
                >
                  <FaApple size={24} />
                  <div className="download-button-text">
                    <span>Download on the</span>
                    <span>App Store</span>
                  </div>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="download-button play-store"
                >
                  <FaGooglePlay size={24} />
                  <div className="download-button-text">
                    <span>Get it on</span>
                    <span>Google Play</span>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>JoinIn</h3>
              <p>Find your event squad today</p>
            </div>
            <div className="footer-links">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Contact</a>
              <a href="#">Privacy</a>
            </div>
            <div className="footer-social">
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
            </div>
          </div>
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} JoinIn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;