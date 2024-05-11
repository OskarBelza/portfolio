import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'; // Import Link

function Header() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top">
            <Container>
                <Navbar.Brand as={Link} to="/" style={{color: '#b71aab'}}>Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">About me</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/cv">Cv</Nav.Link>
                    </Nav>
                    <Link to="/login">
                        <Button variant="outline-info" style={{ marginRight: '10px', color: '#b71aab', borderColor: '#b71aab'}}>Sign In</Button>
                    </Link>
                    <Link to="/register">
                        <Button variant="info" style={{ backgroundColor: '#b71aab', borderColor: '#b71aab', color: 'rgba(255,255,255,0.78)' }}>Sign Up</Button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
