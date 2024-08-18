import React, { useState } from 'react';
import './HelpCenter.css';
// import axios from 'axios';

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    { title: 'Branches', description: 'Abstract Branches lets you manage, version, and document your designs in one place.' },
    { title: 'Manage your account', description: 'Configure your account settings, such as your email, profile details, and password.' },
    { title: 'Manage organizations, teams, and projects', description: 'Use Abstract organizations, teams, and projects to organize your people and your work.' },
    { title: 'Manage billing', description: 'Change subscriptions and payment details.' },
    { title: 'Authenticate to Abstract', description: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.' },
    { title: 'Abstract support', description: 'Get in touch with a human.' },
  ];

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /*
  const HelpCenter = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/cards')
      .then(response => setCards(response.data))
      .catch(error => console.error('Error fetching cards:', error));
  }, []);

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
*/


  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">Abstract | Help Center</div>
        <button className="navbar-button">Submit a request</button>
      </nav>
      <div className="header">
        <h1>How can we help?</h1>
        <input 
          type="text" 
          placeholder="Search" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      <div className="container">
        {filteredSections.map((section, index) => (
          <div className="section" key={index}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Abstract</h4>
            <ul>
              <li>Branches</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Community</h4>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: info@abstract.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default HelpCenter;
