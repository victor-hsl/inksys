import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
const AdminNav = () => {
    return(
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/admin">InkSys</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/admin/info/includeinfo'>Informações</Link></Nav.Link>
                        <Nav.Link href="#features">Portfolio</Nav.Link>
                        <Nav.Link href="#pricing">Orçamento</Nav.Link>
                        <Nav.Link href="#pricing">Banner</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Tema" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Escuro</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Claro</NavDropdown.Item>
                        </NavDropdown>    
                        <Button variant="outline-light">Sair</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AdminNav;