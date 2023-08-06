
import CaracteresForm from './Components/Caracteres';
import Sueldos from './Components/Salarios';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {

  return (
    <> 
    <Navbar/> 
    <Container>
    <Row className="justify-content-md-center p-5">
    <Col xs lg="2">
    <Routes>
          <Route path='/' element={<CaracteresForm/>} />
          <Route path='/sueldos' element={<Sueldos/>}/>
       </Routes>
        </Col>
    </Row>
  </Container>
       {/* <Navbar/> 
       <Routes>
          <Route path='/' element={<CaracteresForm/>} />
          <Route path='/sueldos' element={<Sueldos/>}/>
       </Routes> */}
    </>
  )
}

export default App
