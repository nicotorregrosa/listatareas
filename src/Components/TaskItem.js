import React from 'react';
import { ListGroup } from 'react-bootstrap';

const TaskItem = ({data}) => {
    return (
        <ListGroup.Item>{data}</ListGroup.Item>
    );
};

export default TaskItem;