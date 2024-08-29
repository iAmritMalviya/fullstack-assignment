import React from 'react';
import { SiAbstract } from "react-icons/si";
import '../styles/headerFooter.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Abstract</h3>
                    <p>Branches</p>
                </div>
                <div className="footer-section">
                    <h3>Resources</h3>
                    <p>Blog</p>
                    <p>Help Center</p>
                    <p>Release Notes</p>
                    <p>Status</p>
                </div>
                <div className="footer-section">
                    <h3>Community</h3>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                    <p>Facebook</p>
                    <p>Dribbble</p>
                    <p>Podcast</p>
                </div>
                <div className="footer-company">
                    <div className="footer-section">
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Legal</p>
                        <h4>Contact Us</h4>
                        <p>info@abstract.com</p>
                    </div>
                    <p className='copyright' >© Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
