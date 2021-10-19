import {
  faEnvelopeOpen,
  faHome,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Accordion, Col, Container, Row, Table } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';

const Footer = () => {
  return (
    <div className='bg-light'>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h2>Institute Hours</h2>
            <Accordion>
              <AccordionItem eventKey='0'>
                <AccordionHeader>Sunday</AccordionHeader>
                <AccordionBody>
                  <p>Duration: 8-00 am to 2.00 pm </p>
                  <p>Registration: 8-00 am to 1.00 pm</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey='1'>
                <AccordionHeader>Monday</AccordionHeader>
                <AccordionBody>
                  <p>Duration: 8-00 am to 2.00 pm </p>
                  <p>Registration: 8-00 am to 1.00 pm</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey='2'>
                <AccordionHeader>Tuesday</AccordionHeader>
                <AccordionBody>
                  <p>Duration: 8-00 am to 2.00 pm </p>
                  <p>Registration: 8-00 am to 1.00 pm</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey='3'>
                <AccordionHeader>Wednesday</AccordionHeader>
                <AccordionBody>
                  <p>Duration: 8-00 am to 2.00 pm </p>
                  <p>Registration: 8-00 am to 1.00 pm</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey='4'>
                <AccordionHeader>Thursday</AccordionHeader>
                <AccordionBody>
                  <p>Duration: 8-00 am to 2.00 pm </p>
                  <p>Registration: 8-00 am to 1.00 pm</p>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </Col>
          <Col xs={12} md={4}>
            <h2>Important Links</h2>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>CarrierTraining</td>
                  <td>Lenses</td>
                </tr>
                <tr>
                  <td>Drops</td>
                  <td>Lasik</td>
                </tr>
                <tr>
                  <td>Team</td>
                  <td>Alphabetical</td>
                </tr>
                <tr>
                  <td>Eye Glass</td>
                  <td>Eye Frames</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} md={4}>
            <div>
              <h2>Contact Us</h2>
            </div>
            <div className='d-flex align-items-center justify-content-start'>
              <FontAwesomeIcon
                className='p-3 border rounded me-2 border-2'
                icon={faHome}
                size='4x'
              />
              <div>
                <h4>ADDRESS</h4>
                <p>
                  {' '}
                  <small>C-9, Mrc Castle,Bagichagaon,Cumilla.</small>{' '}
                </p>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-start'>
              <FontAwesomeIcon
                className='p-3 border rounded me-2 border-2'
                icon={faPhone}
                size='4x'
              />
              <div>
                <h4>PHONE</h4>
                <p>+880-1995695139</p>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-start'>
              <FontAwesomeIcon
                className='p-3 border rounded me-2 border-2'
                icon={faEnvelopeOpen}
                size='4x'
              />
              <div>
                <h4>Email</h4>
                <p>iqbal.cb88@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <p className='text-center bg-dark text-white-50 py-3'>
        &copy; all right reserved by vision care hospital 2021{' '}
      </p>
    </div>
  );
};

export default Footer;
