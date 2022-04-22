import './styles.css'
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
export const Menu = () => {
    return(
        <Navbar className="mb-2 mt-2 rounded menuarea" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                            <h3><Link className="none" to='/app/info'>Informações</Link></h3>
                    </Nav>
                    <Nav className="m-auto">
                            <h3><Link className="none" to='/app/portfolio'>Portfolio</Link></h3>
                    </Nav>
                    <Nav className="m-auto">
                        <h3><Link className="none" to='/app/orcamento'>Orçamento</Link></h3>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );    
}