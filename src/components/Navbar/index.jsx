import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand href="#home" className='text-white text-uppercase'>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-3">
                        <Nav.Link href="#home" className='text-white text-uppercase'>Home</Nav.Link>
                        <Nav.Link href="#link" className='text-white text-uppercase'>PORTFOLIO</Nav.Link>
                        <Nav.Link href="#link" className='text-white text-uppercase'>ABOUT</Nav.Link>
                        <Nav.Link href="#link" className='text-white text-uppercase'>Contact</Nav.Link>
                      
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
