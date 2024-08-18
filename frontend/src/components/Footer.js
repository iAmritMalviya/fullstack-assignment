/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from "../assets/logo-header.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-14">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold mb-2 text-lg">Abstract</h3>
          <ul>
            <li><a href="#" className="hover:underline">Branches</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-lg">Resources</h3>
          <ul>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Release Notes</a></li>
            <li><a href="#" className="hover:underline">Status</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-lg">Community</h3>
          <ul>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Dribbble</a></li>
            <li><a href="#" className="hover:underline">Podcast</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-lg">Company</h3>
          <ul>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
          </ul>
          <div className="mt-4">
            <p className="font-bold text-lg">Contact Us</p>
            <a href="mailto:info@abstract.com" className="hover:underline">info@abstract.com</a>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-center pt-28">
        <img src={logo} alt="" className='pl-2' />
          <p>&copy; Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
