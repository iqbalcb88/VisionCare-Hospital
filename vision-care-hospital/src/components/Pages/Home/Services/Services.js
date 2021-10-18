import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import '../../../style.css';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((result) => setServices(result));
  }, []);

  console.log(services);
  return (
    <div className='services pb-5 services-bg'>
      <h1 className='text-center text-white-50 py-3 mb-3 bg-dark'>SERVICES</h1>
      <Container>
        <Row xs={1} xm={2} md={2} lg={3} className='g-4'>
          {services.map(
            (service) =>
              service.id < 107 && <Service key={service.id} service={service} />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
