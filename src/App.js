import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/homepage';
import Test from './pages/testpage';
import Navigation from './components/navbar';

function App() {
  return (
    <HashRouter>
    <Navigation/>
          <Routes>
          <Route exact path="/rromero-photography/home" element={<Home/>} />
          <Route exact path="/rromero-photography/test" element={<Test/>} />
        </Routes>
    </HashRouter>

  );
}

export default App;
