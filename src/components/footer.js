import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                        <p>&copy; 2024 My Website</p>
                    </Col>
                    <Col className="social-icons">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/OskarBelza" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
