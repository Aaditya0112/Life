import React from 'react';
import '../stylesheets/Themes.css'; 
import t1 from"../images/Theme1.webp" // You can create and link your CSS file here
// import ssc from "../images/Theme2.jpg"
import t3 from "../images/theme_3.jpeg"
// import t4 from "../images/theme_4.jpg"


// import React from 'react';
// import './ThemesWithTitles.css';

const Themes = () => {
  const themes = [
    {
      title: 'Consciousness, Culture & Sustainability',
      imageUrl: t1,
    },
    {
      title: 'Leveraging Sustainability Economics',
      imageUrl: t3,
    },
    // {
    //   title: 'Sustainable Technologies & Value Chains',
    //   imageUrl: ssc,
    // },
    // {
    //   title: 'Sustainable Future Planning at Scale',
    //   imageUrl: t4,
    // },
  ];

  return (
    <div className="themes-container">
      <div className="themes-grid">
        {themes.map((theme, index) => (
          <div className="theme-item" key={index}>
            <img src={theme.imageUrl} alt={theme.title} className="theme-image" />
            <div key={index}>
              <span className="theme-number text-5xl">{index + 1}&ensp;|</span>
              <span className="theme-list-title text-2xl dgreen">{theme.title}</span>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Themes;

