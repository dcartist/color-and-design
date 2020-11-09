import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';
class Navigation extends Component {
	render() {
		return (
			<div>
				{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navBackground"> */}
				<Navbar collapseOnSelect expand="lg" className="navBackground" variant="dark" >
					<Navbar.Brand href="/" style={{ color: 'white', textDecoration: 'none' }}>
						Color and Design
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
								Home
							</Nav.Link>
							<Nav.Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>
								About
							</Nav.Link>
							<Nav.Link href="/main" style={{ color: 'white', textDecoration: 'none' }}>
								All the Colors
							</Nav.Link>
						</Nav>
						<Nav>
							{/* <Nav.Link href="#deets">More deets</Nav.Link> */}
							{/* <Nav.Link eventKey={2} href="#memes" style={{ color: 'white', textDecoration: 'none' }}>
								Contact
							</Nav.Link> */}
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				{/* 
<Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
    <Navbar.Brand href="#home">
        Color and Design
     
    </Navbar.Brand>


    <Nav className="justify-content-center" activeKey="/home" >
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
  </Navbar> */}
			</div>
		);
	}
}

export default Navigation;
