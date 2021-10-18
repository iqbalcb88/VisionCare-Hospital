import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
  const { id, name, details, img } = service;
  console.log(service);
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant='top' src={img} />
          <Card.Header>{name}</Card.Header>
          <Card.Body>
            <Card.Text>{details.slice(0, 120)}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <button className='btn btn-outline-primary'>Details</button>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
