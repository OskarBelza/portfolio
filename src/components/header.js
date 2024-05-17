import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../context/AuthContext';
import { AiOutlineUser } from 'react-icons/ai';
import '../styles/header.css';
import { useTranslation } from 'react-i18next';
import enFlag from '../resources/eng.png';
import plFlag from '../resources/pl.png';



function Header() {
    const { i18n } = useTranslation();
    const { t } = useTranslation('header');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const { isLoggedIn } = useAuth();

    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top">
            <Container>
                <img
                    src={enFlag}
                    alt="English"
                    onClick={() => changeLanguage('en')}
                    style={{cursor: 'pointer', width: '30px', marginRight: '10px'}}
                />
                <img
                    src={plFlag}
                    alt="Polish"
                    onClick={() => changeLanguage('pl')}
                    style={{cursor: 'pointer', width: '30px'}}
                />
                <Navbar.Brand as={Link} to="/" className="brand">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/projects">{t('projects')}</Nav.Link>
                        <Nav.Link as={Link} to="/contact">{t('contact')}</Nav.Link>
                        <Nav.Link as={Link} to="/cv">Cv</Nav.Link>
                        <Nav.Link as={Link} to="/tutoring">{t('tutoring')}</Nav.Link>
                    </Nav>
                    {isLoggedIn ? (
                        <Link to="/profile">
                            <AiOutlineUser className="profile-icon"/>
                        </Link>
                    ) : (
                        <div>
                            <Link to="/login">
                                <Button variant="outline-info" className="sign-in">{t('signIn')}</Button>
                            </Link>
                            <Link to="/register">
                                <Button variant="info" className="sign-up">{t('signUp')}</Button>
                            </Link>
                        </div>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
