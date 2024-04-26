import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './Components/Heading';
import SubHeading from './Components/SubHeading';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import FormTask from './Components/FormTask';

function App() {

  const [enabled, setEnabled] = useState(false)  // Definición de Estado (State), useState es el hook,
  // dentro del hook ponemos el valor inicial de la variable que va a cambiar.
  
  return (
    <div>
      <Container> 
      <Heading classroom = "66i" enable = {enabled}></Heading>
      <SubHeading></SubHeading>
      <div className='text-center'>
          <button className='btn btn-primary text-center' onClick={() => setEnabled(!enabled)}>
            {enabled ? 'Deshabilitar' : 'Habilitar'}
          </button>
      </div>
      <FormTask></FormTask>
      </Container>
    </div>
  );
}

export default App; 
