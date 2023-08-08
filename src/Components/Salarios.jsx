import { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Salarios = () => {
   const [sueldo, setSueldo] = useState(0); 
   
   const [descuento, setDescuento] = useState(0); 
   const [aumento, setAumento] = useState(0);
   const [igss, setIgss] = useState(0.0483);
   const [msg, setMsg] = useState("");
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const calculos = () => {
       if(!sueldo || !aumento || !descuento){
        setMsg("el sueldo debe ser mayor a 0");
       } else {
            let cuotaLaboral = sueldo * igss;
            let menosCuotaLaboral = sueldo - cuotaLaboral;
            let masAumento = menosCuotaLaboral + aumento;
            let menosDecuento = masAumento - descuento; 
             setMsg(`El sueldo calculado total es: Q.${menosDecuento}`);
             setTimeout(function(){
             setShow(true)
          }, 2000);
       }
   }
  return (
    <>
      <Card className="m-3" style={{ width: "15rem" }} >
        <Card.Body>
          <Card.Title>SUELDOS</Card.Title>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>INGRESE SUELDO</Form.Label>
                <Form.Control type="number"  onChange={(e) => setSueldo(parseFloat(e.target.value))} />
                <Form.Label>INGRESE DESCUENTO VARIABLE</Form.Label>
                <Form.Control type="number" onChange={(e) => setDescuento(parseFloat(e.target.value))} />
                <Form.Label>INGRESE AUMENTO</Form.Label>
                <Form.Control type="number" onChange={(e) => setAumento(parseFloat(e.target.value))} onKeyUp={calculos} />
              </Form.Group>
            </Form>
        </Card.Body>
      </Card>
      {
        msg && ( <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del calculo del sueldo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>
        SUELDO ORIGINAL : Q {sueldo} ,
      </p>
      <p>
        IGSS : 4.83% sobre sueldo ,
      </p>
      <p>
        AUMENTO INGRESADO : Q {aumento} ,
      </p>
      <p>
        DESCUENTO INGRESADO : Q {descuento} ,
      </p>
      <p className="font-weight-bold">
        {msg}
      </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>)
      }
    </>
  );
};

export default Salarios;
