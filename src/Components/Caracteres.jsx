import { useState } from 'react'

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
const Caracteres = () => {
  const [message, setMessage] = useState("");
  const[info, setInfo] = useState("");
  const validar = () => {
    if (info.length < 5  ) {
      setMessage("ERROR DE VALIDACIÓN DE DATOS");
    } else  {
       setMessage("ACEPTACIÓN DE VALIDACIÓN DE DATOS");
    }
  }

  return (
    <>
       <Card className="m-3" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Validar un input con onchange error menor a 5 caracteres</Card.Title>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>INGRESE VALORES</Form.Label>
                <Form.Control type="text"  onChange={(e) => {setInfo(e.target.value)}} onKeyUp={validar} />
              </Form.Group>
            </Form>
            {
              message && (<div className='bg-dark text-white'>{message}</div>)
            }
            
        </Card.Body>
      </Card>
    </>
  )
}

export default Caracteres