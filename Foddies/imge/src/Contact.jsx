import React from 'react';
import './Contact.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="social-icons">
          <div className="logo">☕</div>
          <p className="follow-title">Follow</p>
          <div className="social-icons">
            <a href="app"><i className="fab fa-twitter"></i></a>
            <a href="app"><i className="fab fa-facebook"></i></a>
            <a href="app"><i className="fab fa-youtube"></i></a>
            <a href="app"><i className="fab fa-instagram"></i></a>
          </div>
          <p className="address-title">Address</p>
          <p>Model town Link Road</p>
          <p>City, Lahore,Pakistan</p>
          <p>SM Khawar Resturant</p>
        </div>
      </div>

      <div className="footer-section opening-hours">
        <h3>Opening Hours</h3>
        <p>Monday: 11:00 - 10:00</p>
        <p>Tuesday: 11:00 - 10:00</p>
        <p>Wednesday: 11:00 - 10:00</p>
        <p>Thursday: 11:00 - 10:00</p>
        <p>Friday: 11:00 - 10:00</p>
        <p>Saturday: 11:00 - 10:00</p>
        <p>Sunday: Closed</p>
      </div>

      <div className="form-section">
        <h3>Contact Us</h3>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="phone" placeholder="Phone" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
