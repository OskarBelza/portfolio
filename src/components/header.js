import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";

function Header() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top">
            <Container>
                <Navbar.Brand href="#home" style={{color: '#6f42c1'}}>Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">About me</Nav.Link>
                        <Nav.Link href="#features">Projects</Nav.Link>
                        <Nav.Link href="#features">Contact</Nav.Link>
                        <Nav.Link href="#pricing">Cv</Nav.Link>
                    </Nav>
                    <Button variant="outline-info" style={{ marginRight: '10px', color: '#6f42c1', borderColor: '#6f42c1'}}>Sign In</Button>
                    <Button variant="info" style={{ backgroundColor: '#6f42c1', borderColor: '#6f42c1', color: 'rgba(255,255,255,0.78)' }}>Sign Up</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
