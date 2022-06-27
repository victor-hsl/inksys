import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import './styles.css'
import { useActive } from '../../hooks/navActive'

type Props = {
    scrollPosition: number;
}
const Navigation = ({scrollPosition} : Props) => {
    const active = useActive();
    return(
        <Navbar bg="light" expand='md' className={`px-2 py-3 px-md-3 px-lg-5 ${scrollPosition < 100 ? 'transparente' : ''}`} sticky="top" variant={`${scrollPosition < 100 ? 'dark' : 'light'}`}>
                <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
                <Navbar.Brand href="#" className='ms-3 ms-md-0'>Tattoo Studio</Navbar.Brand>
                <Navbar.Offcanvas
                    id='offcanvasNavbar-expand-md'
                    aria-labelledby='offcanvasNavbarLabel-expand-md'
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1">
                        <Nav.Link active={active === 0 ? true : false} href="/">Página inicial</Nav.Link>
                        <Nav.Link active={active === 1 ? true : false} href="/info">Informações</Nav.Link>
                        <Nav.Link active={active === 2 ? true : false} href="/portfolio">Portfólio</Nav.Link>
                        <Nav.Link active={active === 3 ? true : false} href="#orcamento">Orçamento</Nav.Link>
                    </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
        </Navbar>
    )
}

export default Navigation;