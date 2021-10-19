import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import '../../../style.css';

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((result) => setServices(result));
  }, []);

  return (
    <div id='services' className='services pb-5 services-bg'>
      <h1 className='text-center text-info py-3 mb-3 '>SERVICES</h1>
      <Container>
        <Row xs={1} xm={2} md={2} lg={3} className='g-4'>
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllServices;
