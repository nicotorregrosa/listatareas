import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import TaskList from "./TaskList";

const FormTask = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-3 text-center">
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <Button className="my-3" variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <section className="container">
        <TaskList taskArray = {tasks}></TaskList>
      </section>
    </div>
    // poner {handleSubmit} es equivalente a poner {(e) => handleSubmit(e)}
  );
};

export default FormTask;
