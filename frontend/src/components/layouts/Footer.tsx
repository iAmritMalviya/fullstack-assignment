import React from "react";

const Footer = () => {
  return (
    <div className="p-16 bg-black text-gray-200 flex flex-wrap gap-4 items-start justify-between">
      <div>
        <h3 className="font-bold mb-2">Abstract</h3>
        <ul className="list-none ">
          <li>Branches</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Resources</h3>
        <ul className="list-none ">
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Community</h3>
        <ul className="list-none ">
        <li>Twitter</li>
          <li>Linkendin</li>
          <li>Facebook</li>
          <li>Dribble</li>
          <li>Podcast</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Company</h3>
        <ul className="list-none ">
          <li>About us</li>
          <li>Carrers</li>
          <li>Branches</li>
        </ul>
        <h3 className="mt-4 text-[15px] font-bold ">Contact us</h3>
        <ul className="list-none ">
          <li>info@abstract.com</li>
        </ul>
      </div>
      <div className="self-end text-white">
        <h3 className=" mb-2">&copy; Copyright 2022</h3>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights are reserved</p>
      </div>
    </div>
  );
};

export default Footer;
