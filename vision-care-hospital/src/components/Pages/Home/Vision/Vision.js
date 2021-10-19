import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Vision = () => {
  return (
    <div className='d-flex justify-content-center my-3'>
      <Container>
        <Row xs={1}>
          <Col className='d-flex justify-content-center'>
            <div className=' flex-column d-flex justify-content-center align-items-start my-5 py-5'>
              <h1>OUR VISION AND MISSION</h1>
              <p>
                Vision Care has been established with the slogan “Mission for
                Vision”. Its journey has been commenced to introduce advanced
                technologies in eye care field of Bangladesh at an affordable
                cost and ensure skillness, sincerity and devotion in eye care
                service. It has been working for prevention of blindness from
                the society and restoring perfect vision along with the programs
                of ‘Vision 2020’ run by WHO. It serves purposes of national eye
                care (NEC) of People’s Republic of Bangladesh in this context.
              </p>
              <h3>To reduce the curse of blindness in the society</h3>
              <p>
                Make people aware about prevention of blindness and provide
                specialized treatment for eye patients and rehabilitation of
                blind and visually handicapped people who can neither be helped
                by treatment nor surgery.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vision;
