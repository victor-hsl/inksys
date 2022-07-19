import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import { auth } from '../../../connections/FirebaseConnection';
import { signOut, User, onAuthStateChanged } from "firebase/auth";
const NavBar = () => {

    const logout = async () => {
        await signOut(auth);
    }
    return(
        <Navbar bg="dark" expand='xl' className='px-2 py-3 px-md-3 px-lg-5' sticky="top" variant='dark'>
                <Navbar.Toggle aria-controls='offcanvasNavbar-expand-xl' />
                <Navbar.Brand href="#" className='ms-3 ms-md-0'>Tattoo Studio</Navbar.Brand>
                <Navbar.Offcanvas
                    id='offcanvasNavbar-expand-xl'
                    aria-labelledby='offcanvasNavbarLabel-expand-xl'
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1">
                        <Link 
                            to='/admin/home' 
                            className={`nav-link ${window.location.pathname === '/admin/home' ? 'active' : window.location.pathname === '/admin' ? 'active' : ''}`}
                        >
                            {window.location.pathname === '/admin' || window.location.pathname === '/admin/home' ? (<i className='bi bi-house me-2'/>) : ''}
                            Home
                        </Link>
                        <Link 
                            to='/admin/orcamentos' 
                            className={`nav-link ${window.location.pathname === '/admin/orcamentos' ? 'active' : ''}`}
                        >
                            {window.location.pathname === '/admin/orcamentos' ? (<i className='bi bi-calendar-plus me-2'/>) : ''}
                            Orçamentos
                        </Link>
                        <Link 
                            to='/admin/infos' 
                            className={`nav-link ${window.location.pathname === '/admin/infos' ? 'active' : ''}`}
                        >
                            {window.location.pathname === '/admin/infos' ? (<i className='bi bi-info-circle me-2'/>) : ''}
                            Informações
                        </Link>
                        <Link 
                            to='/admin/portfolio' 
                            className={`nav-link ${window.location.pathname === '/admin/portfolio' ? 'active' : ''}`}
                        >
                            {window.location.pathname === '/admin/portfolio' ? (<i className='bi bi-vector-pen me-2'/>) : ''}
                            Portfólio
                        </Link>
                        <Link to='/admin/destaques' className={`nav-link ${window.location.pathname === '/admin/destaques' ? 'active' : ''}`}>Destaques</Link>
                        <NavDropdown
                            title="Cabeçalhos"
                            id='offcanvasNavbarDropdown-expand-xl'
                        >
                            <Link to='/admin/headers/home' onClick={window.location.reload} className={`dropdown-item ${window.location.pathname === '/admin/headers/home' ? 'active' : ''}`}>Página Inicial</Link>
                            <Link to='/admin/headers/info' onClick={window.location.reload} className={`dropdown-item ${window.location.pathname === '/admin/headers/info' ? 'active' : ''}`}>Informações</Link>
                            <Link to='/admin/headers/portfolio' onClick={window.location.reload} className={`dropdown-item ${window.location.pathname === '/admin/headers/portfolio' ? 'active' : ''}`}>Portfólio</Link>
                            <Link to='/admin/headers/orcamento' onClick={window.location.reload} className={`dropdown-item ${window.location.pathname === '/admin/headers/orcamento' ? 'active' : ''}`}>Orçamento</Link>
                        </NavDropdown>
                        <Link to='/admin/sobre' className={`nav-link ${window.location.pathname === '/admin/sobre' ? 'active' : ''}`}>Sobre</Link>
                        <hr/>
                        <button className='btn btn-light ms-xl-2' onClick={logout}>
                            <i className="bi bi-door-open"/>
                            Sair
                        </button>
                    </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
        </Navbar>
    )
}

export default NavBar;