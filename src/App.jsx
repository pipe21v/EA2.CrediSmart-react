import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Simulator from './pages/Simulator';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark-blue px-4 py-3">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="navbar-brand fw-bold fs-3">CrediSmart</Link>
          <div className="nav-links">
            <Link to="/" className="text-white text-decoration-none me-4 fw-bold">INICIO</Link>
            <Link to="/simulator" className="text-white text-decoration-none fw-bold">SIMULADOR</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/simulator" element={<Simulator />} />
      </Routes>
    </Router>
  );
}

export default App;