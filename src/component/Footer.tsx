import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { companyInfo } from "../config/CompanyDetails";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Company Info */}
          <div>
            <img src={companyInfo.imagePath} alt={`${companyInfo.name} Logo`} className="h-20 mb-0 mx-auto md:mx-0" />
            <h2 className="text-2xl font-bold">{companyInfo.name}</h2>
            <p className="text-gray-400 mt-2">
              {companyInfo.Description}
            </p>
            <p className="text-gray-400 mt-2">
              {companyInfo.address}
            </p>
             <p className="text-gray-400 mt-2">
              {companyInfo.phone}
            </p>
             <p className="text-gray-400 mt-2">
              {companyInfo.email}
            </p>
            <p className="text-gray-400 mt-2">
              {companyInfo.BP}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition">
                  About us
                </a>
              </li>
              <li>
                <a href="/service" className="text-gray-400 hover:text-white transition">
                  Service
                </a>
              </li>
              <li>
                <a href="/contactus" className="text-gray-400 hover:text-white transition">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-400 hover:text-white text-2xl transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-400 hover:text-white text-2xl transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-400 hover:text-white text-2xl transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
          <p>&copy; Since 2018 - {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
