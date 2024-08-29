import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Abstract</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">Branches</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Release Notes</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Status</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Community</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">Twitter</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">LinkedIn</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Dribbble</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Podcast</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Legal</a>
              </li>
              <li className="mb-2 font-bold">
                Contact Us
                <div className="text-sm">info@abstract.com</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center md:text-left">
          <p className="text-sm">&copy; Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
