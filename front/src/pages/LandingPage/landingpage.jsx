//landingpage.jsx
import React from 'react';
import {Link} from 'react-router-dom'
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <video autoPlay loop muted preload='true' className="background-video">
        <source src="/background.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <Link to='/home'>
      <button className="start-race-button">Start Race</button>
      </Link>
    </div>
  );
};

export default LandingPage;
