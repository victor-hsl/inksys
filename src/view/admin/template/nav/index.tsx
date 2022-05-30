import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import './styles.css'
const AdminNav = () => {
    return(
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link className="none" to='/admin'>InkSys</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="none me-md-3" to='/admin/info/includeinfo'>Informações</Link>
                        <Link className="none me-md-3" to='/admin/portfolio/newpost'>Portfolio</Link>
                        <Link className="none me-md-3" to='/admin/orcamento/edit'>Orçamento</Link>
                        <Link className="none" to='/admin/banner/newitem'>Banner</Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Tema" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Escuro <i className="bi bi-moon-fill"></i></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Claro <i className="bi bi-sun"></i></NavDropdown.Item>
                        </NavDropdown>    
                        <Link className="none" to='/'><Button variant="outline-light"><i className="bi bi-box-arrow-left"></i> Sair</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AdminNav;