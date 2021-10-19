import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Training = () => {
  return (
    <Container>
      <Row xs={1} sm={2} md={2}>
        <Col className='d-flex justify-content-center'>
          <div className=' flex-column d-flex justify-content-center align-items-start my-5 py-5'>
            <h2>Name of the Course: Ophthalmic Assistant Certificate Course</h2>
            <h4>(The course affiliated by The state medical faculty)</h4>
            <h6>Duration: One Year</h6>
            <p>Eligibility: S.S.C (Science) or Equivalent or Paramedics</p>
            <h6>Academic Session:</h6>
            <p>January to December (Every Year)</p>
            <h6>Admission activities start:</h6>
            <p>
              1st September to 31st October (Every Year) No of seat : 25 (Twenty
              Five).
            </p>
            <h6>Course Fees:</h6>
            <p> 40,000 (Forty thousand) including form fill up.</p>
          </div>
        </Col>
        <Col className='d-flex justify-content-center'>
          <div className=' flex-column d-flex justify-content-center align-items-start my-5 py-5'>
            <h2>Name of the Course: Refraction Certificate Course</h2>
            <h4>
              (The course directed by BICO & Eye Hospital- Non government)
            </h4>
            <h6>Duration: One Year</h6>
            <p>
              Eligibility: S.S.C Science or Equivalent or Ophthalmic Paramedics
              or Paramedics.
            </p>
            <h6>Academic Session:</h6>
            <p>January to December (Every Year)</p>
            <h6>Admission activities start:</h6>
            <p>
              1st September to 31st October (Every Year) No of seat : 25 (Twenty
              Five).
            </p>
            <h6>Course Fees:</h6>
            <p> 40,000 (Forty thousand) including form fill up.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Training;
