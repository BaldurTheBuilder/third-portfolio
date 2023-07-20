import React from 'react';
import '../styles/Footer.css';

// WHEN I view the footer I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
const Footer = () => {
  return (
    <footer className="footer text-center fixed-bottom">
        <div className="container">
            <div className="row">
                <div className="col-4">
                  <a href="https://github.com/BaldurTheBuilder">GitHub</a> 
                </div>
                <div className="col-4">
                <a href="https://www.linkedin.com/in/jack-kokcarlson/">LinkedIn</a> 
                </div>
                <div className="col-4">
                <a href="mailto:jack.kokcarlson@gmail.com">Email</a> 
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;

