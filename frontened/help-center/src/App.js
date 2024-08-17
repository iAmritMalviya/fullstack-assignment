import React from "react";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import { CardProvider } from "./context/CardContext";
import "./App.css";

function App() {
  return (
    <CardProvider>
      <div className="app">
        <header>
          <h1>How can we help?</h1>
          <SearchBar />
        </header>
        <CardList />
        <footer>
          <footer className="footer">
            <div className="arjoo">
              <div className="footer-content">
                <div className="footer-section">
                  <h4>Abstract</h4>
                  <p>Branches</p>
                </div>
                <div className="footer-section">
                  <h4>Resource</h4>
                  <p>Blog</p>
                  <p>Help Center</p>
                  <p>Realse Notes</p>
                  <p>Status</p>
                </div>
                <div className="footer-section">
                  <h4>Community</h4>
                  <p>Twitter</p>
                  <p>Linkdin</p>
                  <p>Facebook</p>
                  <p>Instagram</p>
                </div>
                <div className="footer-section">
                  <h4>Company</h4>
                  <p>About us</p>
                  <p>Career</p>
                  <p>Legal</p>
                  <br></br>
                  <p>Contact us</p>
                  <p>helpcenter765@gmail.com</p>
                </div>
              </div>
              <div className="footer-bottom">
                <p>
                  &copy; @copyright 2022<br></br>
                  <p>Abstract studios design</p>
                  All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </footer>
      </div>
    </CardProvider>
  );
}

export default App;
