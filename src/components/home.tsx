import React, { useState, useEffect } from 'react';

const Home = () => {

  return (
    <div className='home-banner'>
      <div className='video-background'>
        <video autoPlay loop muted className='background-main'>
          <source src='/Videos/home.mp4' />
        </video>
      </div>
      {/* <div>

      </div> */}
    </div>
  );
};

export default Home;
