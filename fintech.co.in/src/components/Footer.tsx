
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold font-roboto mb-4">FinTech Analytics</h3>
              <p className="text-gray-300 mb-4">
                Empowering Financial Insights with Advanced AI Solutions
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>701, Stellar Tower, Chembur East</p>
                <p>Mumbai, Maharashtra 400071</p>
                <p>Phone: +91 8369848475</p>
                <p>Email: info@fintech.co.in</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#hero" className="text-gray-300 hover:text-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-accent transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Advanced Data Analytics</li>
                <li>Predictive Analytics</li>
                <li>Risk Assessment Tools</li>
                <li>Custom AI Solutions</li>
              </ul>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-300 text-sm mb-4 md:mb-0">
                © {currentYear} FinTech Analytics. All rights reserved.
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span>Owned by</span>
                <a 
                  href="https://scalium.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors flex items-center space-x-1"
                >
                  <span>Scalium.in</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
