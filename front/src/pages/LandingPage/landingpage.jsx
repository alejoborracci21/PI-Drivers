import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <video autoPlay loop muted className="background-video">
        <source src="/background.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <button className="start-race-button">Start Race</button>
    </div>
  );
};

export default LandingPage;
