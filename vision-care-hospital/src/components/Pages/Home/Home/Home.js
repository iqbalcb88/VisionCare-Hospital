import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Register from '../Register/Register';
import Services from '../Services/Services';
import Shop from '../Shop/Shop';
import Slider from '../Slider/Slider';
import Welcome from '../Welcome/Welcome';

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Welcome />
      <Shop />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
