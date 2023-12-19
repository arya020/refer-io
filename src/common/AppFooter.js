import React, { Component } from 'react'
import './AppFooter.css'

class AppFooter extends Component {
  render () {
    return (
      <footer className='app-footer'>
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          <div className="footer-section">
            <h3>Connect With Us</h3>
            <ul className="social-icons">
              <li><a href="#" target="_blank"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="container">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>

    )
  }
}

export default AppFooter
