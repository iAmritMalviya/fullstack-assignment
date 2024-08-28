import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Abstract</h3>
            <ul className="space-y-2">
              <li>Branches</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Community</h3>
            <ul className="space-y-2">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Company</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
            </ul>
            <div className="mt-8">
              <h4 className="font-bold text-lg mb-2">Contact Us</h4>
              <p>info@abstract.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start  gap-4">
          <div className="bg-white text-black p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4 sm:mb-0">
            <span className="text-2xl font-bold">A</span>
          </div>
          <p className="text-sm text-center sm:text-right">
            &copy; Copyright 2022<br />
            Abstract Studio Design, Inc.<br />
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;