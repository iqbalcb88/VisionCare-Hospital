import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import oneShopImg from '../../../../images/1.png';
import twoShopImg from '../../../../images/2.png';
import threeShopImg from '../../../../images/3.png';

const Shop = () => {
  return (
    <div>
      <div className='services pb-5 '>
        <h1 className='text-center text-dark-50 py-3 mb-3 fs-1 '>SHOP</h1>
        <p className='text-center'>Choose your Glasses and Lenses</p>
        <Container>
          <Row xs={1} xm={2} md={2} lg={3} className='g-4'>
            <Col>
              <Card className='card-hover'>
                <Card.Img variant='top' src={oneShopImg} />
                <Card.Header>Anti Glare Glass</Card.Header>
                <Card.Body>
                  <Card.Text>Price: 100TK</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to=''>
                    <button className='btn btn-outline-dark'>BUY NOW</button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className='card-hover'>
                <Card.Img variant='top' src={twoShopImg} />
                <Card.Header>Eye Drop</Card.Header>
                <Card.Body>
                  <Card.Text>Price: 300TK</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to=''>
                    <button className='btn btn-outline-dark'>BUY NOW</button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className='card-hover'>
                <Card.Img variant='top' src={threeShopImg} />
                <Card.Header>Contact Lenses</Card.Header>
                <Card.Body>
                  <Card.Text>Price: 16000TK</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to=''>
                    <button className='btn btn-outline-dark'>BUY NOW</button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Shop;
