import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import TaskList from "./TaskList";

const FormTask = () => {

  let taskFromLocalStorage = JSON.parse(localStorage.getItem('tasklist')) || []
    
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(taskFromLocalStorage);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  };

  // Acá uso el ciclo de vida del componente (el hook useEffect), a este se le debe pasar una función
  // como primer parámetro y un segundo parámetro opcional.

/*useEffect(() => {

    // Dentro de la función se ejecuta tanto el montaje como la actualización.

})
useEffect(() => {

    // Dentro de la función se ejecuta solo el montaje.

}, [] )*/

useEffect(() => {

    // Dentro de la función se ejecuta tanto el montaje como la actualización, pero dependiendo de uno o mas states.

    localStorage.setItem('tasklist',JSON.stringify(tasks))

}, [tasks] ) // Array de dependencias.

const deleteTask = (taskName) => {
    let filterArray = tasks.filter(task => task !== taskName)
    setTasks(filterArray)
}

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
        <TaskList taskArray = {tasks} deleteTask = {deleteTask}></TaskList>
      </section>
    </div>
    // poner {handleSubmit} es equivalente a poner {(e) => handleSubmit(e)}
  );
};

export default FormTask;
