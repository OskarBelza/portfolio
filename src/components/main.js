import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img from './h_porp.jpg';

function AboutMe() {
    return (
        <div className='p-5 bg-dark'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='text-center'>
                        <div className='text-white'>
                            <h2>About Me</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nulla vel ante blandit
                                condimentum. Sed sit amet purus nec nulla venenatis vulputate. Nullam fringilla elit at
                                porta consectetur.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} className='text-center'>
                        <img src={img} alt='Background' className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;
