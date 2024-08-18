import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-lg p-5 py-10 md:px-28  ">
      <section className="grid grid-cols-2 lg:grid-cols-5 gap-5  q">
        <div className="flex flex-col gap-y-3">
          <h6>Abstract</h6>
          <ul>
            <li>Branches</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-3">
          <h6>Resources</h6>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Releases Notes</li>
            <li>Status</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-3">
          <h6>Community</h6>
          <ul>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Facebook</li>
            <li>Dribbble</li>
            <li>Podcast</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-3">
          <h6>Company</h6>
          <ul>
            <li>About Us </li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
          <ul className="mt-2 ">
            <p className="text-md font-semibold">Contact Us</p>
            <li>info@abstract.com</li>
          </ul>
        </div>
      </section>
      <div className="w-full flex items-center justify-start md:justify-end my-5">
        <div className="text-xl  relative">
          <img
            src="/logo.svg"
            alt="Logo"
            className="size-10 lg:absolute  top-[-80px] left-0 my-2"
          />

          <p>&#169; Copyright 2022</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
