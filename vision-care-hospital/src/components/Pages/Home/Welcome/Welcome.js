import {
  faAmbulance,
  faCalendarCheck,
  faDollarSign,
  faMoneyCheck,
  faUserMd,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import doctors from '../../../../images/doctors.png';

const Welcome = () => {
  const pId = Math.floor(Math.random() * 1000);
  const uId = Math.floor(Math.random() * 1000 + 1000);
  return (
    <div className='mb-5'>
      <Container>
        <Row sx={1} sm={1} md={2}>
          <Col md='6'>
            <div className='mb-3'>
              <img className='img-fluid' src={doctors} alt='' />
            </div>
          </Col>
          <Col
            md='6'
            className='d-flex align-items-baseline
          justify-content-end flex-column '
          >
            <h1>
              <span className='text-danger fw-bolder'>WELCOME TO</span> VISION
              CARE
            </h1>
            <h6 className='text-warning'>
              BEST OPTOMETRIST IN TOWN ARE READY TO SERVE YOU
            </h6>
            <p>
              <span className='text-info fw-bolder border-1 fs-4 p-1 border'>
                V
              </span>{' '}
              ision Care Hospital established in 1969 by some social workers,
              doctors, journalists, lawyers with a view to giving Eye care
              services to the rural people. In 1969 a mobile Eye camp was first
              arranged by some physicians and social workers of Comilla town to
              provide essential services to the patients, suffering from
              different eye related diseases. In that camp awareness was created
              among the patients about various eye related diseases.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row xs={1} md={2} lg={4} className='welcome-bg'>
          <Col className='bg-info text-dark opacity-75 '>
            <div className='fw-bolder py-4 text-center hover-style'>
              <FontAwesomeIcon
                className='text-warning me-1'
                icon={faAmbulance}
                size='4x'
              />
              <h4 className='py-4'>24 HOURS SERVICE</h4>
            </div>
          </Col>
          <Col className='bg-success text-warning opacity-75'>
            <div className='fw-bolder py-4 text-center hover-style'>
              <p>
                <FontAwesomeIcon
                  className='text-info me-1'
                  icon={faDollarSign}
                  size='4x'
                />
              </p>
              <Link to={`/payment/${uId}`}>
                <button className='btn btn-primary'> ONLINE PAYMENT </button>
              </Link>
            </div>
          </Col>
          <Col className='bg-primary text-white opacity-75'>
            <div className='fw-bolder py-4 text-center hover-style'>
              <p>
                <FontAwesomeIcon
                  className='text-white me-1'
                  icon={faUserMd}
                  size='4x'
                />
              </p>
              <Link to={`/consultant/${pId}`}>
                <button className='btn btn-info'>ONLINE CONSULTANCY </button>
              </Link>
            </div>
          </Col>
          <Col className='bg-danger text-info opacity-75'>
            <div className='fw-bolder py-4 text-center hover-style'>
              <FontAwesomeIcon
                className='text-info me-1'
                icon={faCalendarCheck}
                size='4x'
              />
              <h4 className='py-4'>ONLINE APPOINTMENT</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
