import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {

    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
      setExpanded(!expanded);
    };
  
    const handleLinkClick = () => {
      setExpanded(false);
    };

    return(

        <>
        <header>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className='sticky-top' expanded={expanded}>
                <Container>
                    <Navbar.Brand>
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
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  onClick={handleToggle}/>

                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end flex-grow-1 gap-3">
                    <Link className='fw-normal text-uppercase text-light text-decoration-none' to='/buscador' onClick={handleLinkClick}>Buscador</Link>
                    <Link className='fw-normal text-uppercase text-light text-decoration-none' to='/publicaciones' onClick={handleLinkClick}>Publicaciones</Link>
                    <Link className='fw-normal text-uppercase text-light text-decoration-none' to='/multimedia' onClick={handleLinkClick}>Multimedia</Link>
                    <Link className='fw-normal text-uppercase text-light text-decoration-none' to='/acercade' onClick={handleLinkClick}>Acerca de</Link>
                </Nav>
                </Navbar.Collapse>
                
                </Container>
            </Navbar>
        </header>
        </>
    )
}

export default Header;