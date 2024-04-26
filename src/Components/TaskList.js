import React from "react";
import { ListGroup } from "react-bootstrap";
import TaskItem from "./TaskItem";

const TaskList = ({taskArray}) => {
  return (
    <ListGroup>
     {taskArray.map((task,index) => <TaskItem key={index} data = {task}></TaskItem>)}
    </ListGroup>
  );
};

export default TaskList;
