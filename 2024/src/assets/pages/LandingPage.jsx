import React from "react";
import "../stylesheets/LandingPage.css";
import life from '../images/Life-logo.jpg'

function LandingPage() {
  return (
    <div className="Header lgreen">
        <div className="logos">
                {/* <div className="self"> */}
                <div className="life">
                        <img src={life} alt="LiFE" />
                    </div></div>
      <header className="Sub-header ">
        <h1>Welcome to Our Landing  Page</h1>
        <p className="dblue">Visit Our Events with Below Links</p>
      </header>


      <div className="link-section">
        <a href="/2024" target="_blank" rel="noopener noreferrer" className="main-link">
          LiFE 2024
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
