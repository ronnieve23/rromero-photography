import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/homepage';
import Test from './pages/testpage';
import Navigation from './components/navbar';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
        <Routes>
            <Route index path="/home" element={<Home/>} />
            <Route path="/test" element={<Test/>} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
