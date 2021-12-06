import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/homepage';
import Test from './pages/testpage';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/test" element={<Test/>} />
        </Routes>
      </Container>
    </Router>

  );
}

export default App;
