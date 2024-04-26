import React from "react";
import { ListGroup } from "react-bootstrap";
import TaskItem from "./TaskItem";

const TaskList = ({taskArray, deleteTask}) => {
  return (
    <ListGroup>
     {taskArray.map((task,index) => <TaskItem key={index} data = {task} deleteTask = {deleteTask}></TaskItem>)}
    </ListGroup>
  );
};

export default TaskList;
