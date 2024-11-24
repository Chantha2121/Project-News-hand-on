import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b18] text-white">
      {/* Main Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="flex flex-col">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 font-suwanpum">
            Track News
          </h2>
          <p className="text-sm sm:text-base font-suwanpum text-gray-400 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="YouTube">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="font-suwanpum">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Our Website</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">
                Category News
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">
                Hot News
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">
                Contacts
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="font-suwanpum">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="text-gray-400 hover:text-white text-sm sm:text-base">
              <i className="fas fa-phone-alt mr-2"></i> +1 (234) 567-890
            </li>
            <li className="text-gray-400 hover:text-white text-sm sm:text-base">
              <i className="fas fa-envelope mr-2"></i> info@tracknews.com
            </li>
            <li className="text-gray-400 hover:text-white text-sm sm:text-base">
              <i className="fas fa-map-marker-alt mr-2"></i> 123 News Street, Phnom Penh
              City
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#14141f] py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.svg"
              alt="Track News Logo"
              className="h-8 sm:h-10"
            />
            <p className="text-gray-400 text-sm sm:text-base">
              © 2023 <span className="font-semibold">Track News.</span> All
              Rights Reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="YouTube">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
