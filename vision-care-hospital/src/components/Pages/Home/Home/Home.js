import React from 'react';
import Services from '../Services/Services';
import Shop from '../Shop/Shop';
import Slider from '../Slider/Slider';
import Welcome from '../Welcome/Welcome';

const Home = () => {
  return (
    <div>
      <Slider />
      <Welcome />
      <Shop />
      <Services />
    </div>
  );
};

export default Home;
