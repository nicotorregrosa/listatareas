import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FormTask = () => {

    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-3 text-center" onChange={(e) => setTask(e.target.value) }>
          <Form.Control type="text" placeholder="Ingresa una tarea" />
          <Button className="my-3" variant="primary" type="submit">
          Agregar
        </Button>
        </Form.Group>
      </Form>
    </div>
    // poner {handleSubmit} es equivalente a poner {(e) => handleSubmit(e)}
  );
};

export default FormTask;
