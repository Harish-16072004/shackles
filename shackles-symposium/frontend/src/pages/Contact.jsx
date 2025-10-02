import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // In production, this would send to your API
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setFormStatus('error');
    }
  };

  const contactInfo = [
    {
      title: 'General Queries',
      icon: '📧',
      items: [
        {
          label: 'Gokul S',
          value: '+91 9514585887',
          link: 'tel:+919514585887',
        },
      ],
    },
    {
      title: 'Registration Support',
      icon: '📝',
      items: [
        {
          label: 'Sharun',
          value: '+91 9384583077',
          link: 'tel:+919384583077',
        },
      ],
    },
    {
      title: 'Email',
      icon: '✉️',
      items: [
        {
          label: 'Official Email',
          value: 'shackles2025@acgcet.ac.in',
          link: 'mailto:shackles2025@acgcet.ac.in',
        },
      ],
    },
    {
      title: 'Location',
      icon: '📍',
      items: [
        {
          label: 'ACGCET, Karaikudi',
          value: 'Alagappa Chettiar Government College of Engineering & Technology, Karaikudi - 630003, Tamil Nadu',
          link: 'https://maps.app.goo.gl/your-location-link',
        },
      ],
    },
  ];

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">Get in Touch with Team SHACKLES</p>
      </section>

      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-cards">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{info.icon}</div>
                <h3 className="contact-card-title">{info.title}</h3>
                {info.items.map((item, idx) => (
                  <div key={idx} className="contact-item">
                    <p className="contact-label">{item.label}</p>
                    <a 
                      href={item.link} 
                      className="contact-value"
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-coordinators">
        <div className="coordinators-container">
          <h2>Event Coordinators</h2>
          <div className="coordinators-grid">
            <div className="coordinator-category">
              <h3 className="category-title technical-title">
                <span className="category-symbol">■</span>
                Technical Events
              </h3>
              <div className="coordinator-list">
                <div className="coordinator-item">
                  <p className="coordinator-name">Mogith</p>
                  <p className="coordinator-event">Paper Presentation</p>
                  <a href="tel:+916374763740">+91 6374763740</a>
                </div>
                <div className="coordinator-item">
                  <p className="coordinator-name">Jeffery Shakil</p>
                  <p className="coordinator-event">Technical Quiz</p>
                  <a href="tel:+918778531340">+91 8778531340</a>
                </div>
                <div className="coordinator-item">
                  <p className="coordinator-name">Praveen</p>
                  <p className="coordinator-event">CAD Modelling</p>
                  <a href="tel:+919514585887">+91 9514585887</a>
                </div>
                <div className="coordinator-item">
                  <p className="coordinator-name">Vignesh</p>
                  <p className="coordinator-event">Water Rocketry</p>
                  <a href="tel:+919361428799">+91 9361428799</a>
                </div>
                <div className="coordinator-item">
                  <p className="coordinator-name">Sanjay</p>
                  <p className="coordinator-event">Motor Montage</p>
                  <a href="tel:+919384583077">+91 9384583077</a>
                </div>
                <div className="coordinator-item">
                  <p className="coordinator-name">Shobith</p>
                  <p className="coordinator-event">Mech O Mania</p>
                  <a href="tel:+918098726547">+91 8098726547</a>
                </div>
              </div>
            </div>

            <div className="coordinator-category">
              <h3 className="category-title non-technical-title">
                <span className="category-symbol">○</span>
                Non-Technical Events
              </h3>
              <div className="coordinator-list">
                <div className="coordinator-item">
                  <p className="coordinator-name">Abishek</p>
                  <p className="coordinator-event">IPL Auction</p>
                  <a href="tel:+919384583077">+91 9384583077</a>
                </div>
                <div className="coordinator-item">
                  <p className="coordinator-name">Dharun</p>
                  <p className="coordinator-event">Kollywood Quiz</p>
                  <a href="tel:+918098726547">+91 8098726547</a>
                </div>
                <div className="coordinator-item">
                  <p className="coordinator-name">Naveen</p>
                  <p className="coordinator-event">Red Light Green Light</p>
                  <a href="tel:+919361428799">+91 9361428799</a>
                </div>
              </div>
            </div>

            <div className="coordinator-category">
              <h3 className="category-title special-title">
                <span className="category-symbol">△</span>
                Special Events
              </h3>
              <div className="coordinator-list">
                <div className="coordinator-item">
                  <p className="coordinator-name">Gokul S</p>
                  <p className="coordinator-event">Idea Pitching</p>
                  <a href="tel:+919514585887">+91 9514585887</a>
                </div>
                <div className="coordinator-item">
                  <p className="coordinator-name">Sharun</p>
                  <p className="coordinator-event">Robo Soccer</p>
                  <a href="tel:+919384583077">+91 9384583077</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="map-container">
          <h2>Find Us</h2>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.5234567890123!2d78.7890123456789!3d9.8765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTInMzUuNiJOIDc4wrA0NycyMC40IkU!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ACGCET Location"
            ></iframe>
          </div>
          <div className="map-info">
            <p className="map-address">
              <strong>Alagappa Chettiar Government College of Engineering & Technology</strong><br />
              Karaikudi - 630003<br />
              Sivaganga District, Tamil Nadu, India
            </p>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="form-container">
          <h2>Send Us a Message</h2>
          <p className="form-desc">Have a question? Drop us a message and we'll get back to you soon!</p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn-submit"
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {formStatus === 'success' && (
              <p className="form-message success">✓ Message sent successfully! We'll get back to you soon.</p>
            )}
            {formStatus === 'error' && (
              <p className="form-message error">✗ Failed to send message. Please try again or contact us directly.</p>
            )}
          </form>
        </div>
      </section>

      <section className="contact-social">
        <div className="social-container">
          <h2>Connect With Us</h2>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/mechanical_acgcet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <svg viewBox="0 0 24 24" width="32" height="32">
                <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@mechanical_acgcet</span>
            </a>
            <a 
              href="https://www.linkedin.com/company/mechanical-engineering-association-acgcet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <svg viewBox="0 0 24 24" width="32" height="32">
                <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>Mechanical Engineering Association</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <h2>Ready to Join SHACKLES 2025?</h2>
        <p>Register now and be part of an amazing experience</p>
        <Link to="/register" className="btn-register-contact">
          Register Now
        </Link>
      </section>
    </div>
  );
};

export default Contact;
