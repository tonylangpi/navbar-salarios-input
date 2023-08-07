import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import House from '../assets/home-1-svgrepo-com.svg';

const Navegacion = () => {
  return (
    <Navbar expand="lg" className="bg-secondary text-white">
    <Container>
      <Navbar.Brand  href="/"> <Image src={House} style={{width:"30px"}} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto text-white">
          <Nav.Link ><Link to={"/sueldos"} className='text-body-white' style={{ textDecoration: "none" }} >SALARIO</Link></Nav.Link>
          <Nav.Link ><Link to={"/"} className="text-decoration-none">INPUT</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navegacion