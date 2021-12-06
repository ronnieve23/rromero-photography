import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/homepage';
import Test from './pages/testpage';
import Navigation from './components/navbar';

function App() {
  return (
    <Router>
    <Navigation/>
          <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/test" element={<Test/>} />
        </Routes>
    </Router>

  );
}

export default App;
