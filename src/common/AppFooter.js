import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppFooter.css';

class AppFooter extends Component {
    render() {
        return (
            <footer className='app-footer'>
                 <div class="footer-container">
    <div class="footer-section">
      <h3>About Us</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div class="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <h3>Contact Us</h3>
      <p>Email: info@example.com</p>
      <p>Phone: +123 456 7890</p>
    </div>

    <div class="footer-section">
      <h3>Connect With Us</h3>
      <ul class="social-icons">
        <li><a href="#" target="_blank"><i class="fab fa-facebook"></i></a></li>
        <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>
  </div>

  <div class="bottom-footer">
    <div class="container">
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </div>
  </div>
            </footer>   
            
    )}
}

export default AppFooter;