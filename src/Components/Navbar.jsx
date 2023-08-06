import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navegacion = () => {
  return (
    <Navbar expand="lg" className="bg-secondary text-white">
    <Container>
      <Navbar.Brand  href="/">App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto text-white">
          <Nav.Link  to={"/salarios"}>SALARIOS</Nav.Link>
          <Nav.Link to={"/"}>INPUT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navegacion