import React from 'react';
import './App.css';
import { creditsData } from './data/creditsData';
import CreditCard from './components/CreditCard';

function App() {
  return (
    <div className="min-vh-100 bg-white">
      {/* Barra de Navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark-blue px-4 py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <span className="navbar-brand fw-bold fs-3 d-flex align-items-center">
             <img 
              src="public/img/logo.png" //logo barra navegación
             alt="Logo" 
             width="80" 
             height="40" 
             className="d-inline-block align-text-top me-2" 
            />
          </span>
          <div className="nav-links d-none d-md-flex">
            <a href="#" className="text-white text-decoration-none me-4 small fw-bold text-uppercase">Inicio</a>
            <a href="#" className="text-white text-decoration-none me-4 small fw-bold text-uppercase">Simulador</a>
            <a href="#" className="text-white text-decoration-none small fw-bold text-uppercase">Solicitar</a>
          </div>
        </div>
      </nav>

      {/* Banner Principal */}
      <section className="bg-orange text-white py-6 px-4">
        <div className="container">
          <div className="row align-items-center">
            
            {/* Texto Banner*/}
            <div className="col-md-7 text-center text-md-start mb-4 mb-md-0">
              <h1 className="fw-bold display-3 mb-3" style={{ lineHeight: '1.0' }}>
                Seguridad En Cada Paso, <br /> Respaldo En Cada Meta
              </h1>
              <p className="lead opacity-90" style={{ fontSize: '1.2rem', maxWidth: '700px' }}>
                Rediseñamos el acceso al crédito. Combinamos tecnología inteligente con 
                soluciones humanas para ofrecerte préstamos rápidos, transparentes y a tu medida.
              </p>
            </div>

            {/* imagen banner */}
            <div className="col-md-5 text-end p-0 d-none d-md-block">
              <img 
                src="public/img/img_banner.png"
                alt="Cliente CrediSmart con celular" 
                className="img-fluid" 
                style={{ maxHeight: '400px', width: 'auto' }} 
              />
            </div>

          </div>
        </div>
      </section>

      {/* Lista Productos */}
      <main className="container py-5">
        <h2 className="fw-bold text-dark-blue mb-5 text-center text-md-start text-uppercase">Nuestros Productos</h2>
        <div className="row">
          {creditsData.map((credito) => (
            <CreditCard key={credito.id} {...credito} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark-blue text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0 small">&copy; 2026 CrediSmart-IUD. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;