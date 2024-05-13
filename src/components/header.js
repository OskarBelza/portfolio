import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../context/AuthContext';
import { AiOutlineUser } from 'react-icons/ai';
import '../styles/header.css'; // Import stylów

function Header() {
    const { isLoggedIn } = useAuth();

    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top">
            <Container>
                <Navbar.Brand as={Link} to="/" className="brand">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/cv">Cv</Nav.Link>
                        <Nav.Link as={Link} to="/tutoring">Tutoring</Nav.Link>
                    </Nav>
                    {isLoggedIn ? (
                        <Link to="/profile">
                            <AiOutlineUser className="profile-icon" />
                        </Link>
                    ) : (
                        <div>
                            <Link to="/login">
                                <Button variant="outline-info" className="sign-in">Sign In</Button>
                            </Link>
                            <Link to="/register">
                                <Button variant="info" className="sign-up">Sign Up</Button>
                            </Link>
                        </div>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
