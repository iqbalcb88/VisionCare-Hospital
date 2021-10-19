import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import si1 from '../../../../images/slider/1.jpg';
import si2 from '../../../../images/slider/2.jpg';
import si3 from '../../../../images/slider/3.jpg';

const Slider = () => {
  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={si1} alt='First slide' />
          <Carousel.Caption className='text-warning opacity-75 '>
            <h4>CARE YOUR EYES</h4>
            <p>We work To reduce the curse of blindness in the society</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={si2} alt='Second slide' />

          <Carousel.Caption className='text-danger opacity-75'>
            <h4>EYE SAFETY FIRST</h4>
            <p>Don't hesitate or delay if you feel wrong on eye.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={si3} alt='Third slide' />

          <Carousel.Caption className='text-warning opacity-75'>
            <h4>EYES ARE PRICELESS</h4>
            <p>We always ready to help you to get rid from eyes problem.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider;
