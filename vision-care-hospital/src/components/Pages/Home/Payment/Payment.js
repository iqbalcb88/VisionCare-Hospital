import { faCcPaypal, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

const Appointment = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Container>
        <>
          <Row>
            <h3 className='text-muted'>Payment Method</h3>

            <p>
              <Form.Check
                inline
                label='Debit of Credit Card'
                name='group1'
                type='radio'
                id='inline-radio-1'
              />
              <FontAwesomeIcon className='me-1' icon={faCreditCard} size='2x' />
            </p>
            <p>
              <Form.Check
                inline
                label='Paypal'
                name='group1'
                type='radio'
                id='inline-radio-1'
              />
              <FontAwesomeIcon className='me-1' icon={faCcPaypal} size='2x' />
            </p>
          </Row>
          <Row className='mt-3' xs={1} md={2}>
            <Col>
              <FloatingLabel
                controlId='floatingInput'
                label='First Name'
                className='mb-3'
              >
                <Form.Control type='email' placeholder='FirstName' />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId='floatingInput'
                label='Last Name'
                className='mb-3'
              >
                <Form.Control type='text' placeholder='LastName' />
              </FloatingLabel>
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col>
              <FloatingLabel
                controlId='floatingPassword'
                label='Credit Card Number'
                className='mb-3'
              >
                <Form.Control type='password' placeholder='creditCardNumber' />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId='floatingPassword'
                label='CVC Security Code'
                className='mb-3'
              >
                <Form.Control type='password' placeholder='CVC' />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel
                controlId='floatingInput'
                label='MM / YY'
                className='mb-3'
              >
                <Form.Control type='text' placeholder='MM / YY' />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-start'>
              <input
                className=' btn btn-success px-5 py-1 mb-3'
                type='submit'
                value='SUBMIT'
              />
            </Col>
          </Row>
        </>
      </Container>
    </div>
  );
};

export default Appointment;
