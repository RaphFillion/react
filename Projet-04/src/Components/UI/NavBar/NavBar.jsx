import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = (props) => (
  <>
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Ariège MGA</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='localisation'>
              <Nav.Link>localisation</Nav.Link>
            </LinkContainer>
            <LinkContainer to='contact'>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)

export default NavBar