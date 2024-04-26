import React from 'react';
import Status from './Status';

const Heading = ({classroom,enable}) => {
    return (
        <div>
            <h1 className='display-4 text-center'>Lista de tareas {classroom}</h1>
            <Status classroom = {classroom} enable = {enable}></Status>
            <hr />
        </div>
    );
};

export default Heading;

// Componente tipo función