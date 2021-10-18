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
            <h4>First slide label</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={si2} alt='Second slide' />

          <Carousel.Caption className='text-danger opacity-75'>
            <h4>Second slide label</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={si3} alt='Third slide' />

          <Carousel.Caption className='text-warning opacity-75'>
            <h4>Third slide label</h4>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider;
