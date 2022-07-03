import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import './styles.css'
type Props = {
    scrollPosition: number;
}
const Navigation = ({scrollPosition} : Props) => {
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
                        <Nav.Link active={window.location.pathname === '/' ? true : false} href="/">{window.location.pathname === '/' ? (<i className='bi bi-house me-2'/>) : ''}Página inicial</Nav.Link>
                        <Nav.Link active={window.location.pathname === '/info' ? true : false} href="/info">{window.location.pathname === '/info' ? (<i className='bi bi-info-circle me-2'/>) : ''}Informações</Nav.Link>
                        <Nav.Link active={window.location.pathname === '/portfolio' ? true : false} href="/portfolio">{window.location.pathname === '/portfolio' ? (<i className='bi bi-vector-pen me-2'/>) : ''}Portfólio</Nav.Link>
                        <Nav.Link active={window.location.pathname === '/orcamento' ? true : false} href="/orcamento">{window.location.pathname === '/orcamento' ? (<i className='bi bi-calendar-check me-2'/>) : ''}Orçamento</Nav.Link>
                    </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
        </Navbar>
    )
}

export default Navigation;