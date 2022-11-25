import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <>
        <header>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className='sticky-top'>
                <Container>
                    <Navbar.Brand href="#home">
                    <Link to="/">
                    <img
                        src="/img/PCS-logo.svg"
                        width="104"
                        height="auto"
                        className="d-inline-block align-top"
                        alt="Publicaciones comunicacion social - logo"
                        />
                    </Link>
                        
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end flex-grow-1 gap-3">
                    <Link className='fw-normal text-uppercase text-light text-decoration-none' to='/buscador'>Buscador</Link>
                    <Link className='fw-normal text-uppercase text-light text-decoration-none' to='/publicaciones'>Publicaciones</Link>
                    <Link className='fw-normal text-uppercase text-light text-decoration-none' to='/acercade'>Acerca de</Link>
                </Nav>
                </Navbar.Collapse>
                
                </Container>
            </Navbar>
        </header>
        </>
    )
}

export default Header;