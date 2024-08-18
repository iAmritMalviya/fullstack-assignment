import React from 'react';
import { icons } from '../constants';

const Footer = () => {
    return (
        <footer className="bg-black text-white p-8 md:p-12 w-full mt-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Abstract Section */}
                <div>
                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Abstract</h1>
                    <p>Branches</p>
                </div>

                {/* Resources Section */}
                <div>
                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Resources</h1>
                    <ul className="space-y-2">
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Release Notes</li>
                        <li>Status</li>
                    </ul>
                </div>

                {/* Community Section */}
                <div>
                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Community</h1>
                    <ul className="space-y-2">
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Facebook</li>
                        <li>Dribbble</li>
                        <li>Podcast</li>
                    </ul>
                </div>

                {/* Company & Contact Section */}
                <div>
                    <div className="mb-8">
                        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Company</h1>
                        <ul className="space-y-2">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Legal</li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Contact Us Section */}
                        <div>
                            <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Contact Us</h1>
                            <p className="text-base md:text-lg">info@abstract.com</p>
                        </div>

                        {/* Logo and Copyright Section */}
                        <div className="flex flex-col items-center sm:items-start">
                            <img src={icons.abstract} alt="abstract logo" className="h-10 w-10 mb-2" />
                            <p className="text-sm md:text-base lg:text-lg text-center sm:text-left">
                                © 2022 Abstract Studio Design, Inc. All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
