import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './Components/Heading';
import SubHeading from './Components/SubHeading';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container> 
      <Heading classroom = "66i" enable = {true}></Heading>
      <SubHeading></SubHeading>
      </Container>
      
    </div>
  );
}

export default App; 
