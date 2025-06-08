import React from 'react';
import './Home.css';
import hero_banner from '../../assets/netflix_react_assets/assets/hero_banner.jpg';
import hero_title from '../../assets/netflix_react_assets/assets/hero_title.png';
import play_icon from '../../assets/netflix_react_assets/assets/play_icon.png';
import info_icon from '../../assets/netflix_react_assets/assets/info_icon.png';
import Titlecard from '../../components/Titlecard/Titlecard';

const Home = () => {
  return (
    <div className="home-text">
      <div className="hero">
  <img src={hero_banner} alt="Hero Banner" className="banner-img" />
  
  {/* Overlay for better text contrast */}
  <div className="overlay"></div>
  
  <div className="hero-caption">
    <img src={hero_title} alt="Hero Title" className="caption-img" />
    <p>A new world of entertainment. Unlimited movies, shows and more.</p>

    <div className="hero-btns">
      <button className="btn">
        <img src={play_icon} alt="Play Icon" />
        Play
      </button>
      <button className="dark-btn">
        <img src={info_icon} alt="Info Icon" />
        More Info
      </button>
    </div>
  </div>
  
</div>

      <div className="sections">
        <Titlecard />
      </div>
    </div>
  );
};

export default Home;
