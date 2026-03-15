import React, { useState } from 'react';

const Simulator = () => {
  const [monto, setMonto] = useState(0);
  const [plazo, setPlazo] = useState(12);
  const tasaMensual = 0.018; // 1.8% según tu diseño

  // Cálculo de cuota nivelada (fórmula francesa)
  const cuota = monto > 0 
    ? (monto * (tasaMensual * Math.pow(1 + tasaMensual, plazo))) / (Math.pow(1 + tasaMensual, plazo) - 1)
    : 0;

  return (
    <div className="min-vh-100 bg-white">
      <section className="bg-orange text-white py-5 px-4 text-center">
        <h1 className="fw-bold display-4 text-uppercase">Simulador de Crédito</h1>
        <div className="container mt-4 d-flex justify-content-center gap-5 d-none d-md-flex">
          <div><i className="bi bi-cash-coin fs-1"></i><p>Préstamos desde $1M</p></div>
          <div><i className="bi bi-calendar3 fs-1"></i><p>Plazos hasta 60 meses</p></div>
          <div><i className="bi bi-person-check fs-1"></i><p>Para personas de 18 a 60 años</p></div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-10 shadow-lg rounded p-5">
            <h3 className="text-center fw-bold mb-5">Ingresa Los Datos Y Calcula El Valor Aproximado De Tu Cuota</h3>
            <div className="row">
              <div className="col-md-6">
                <label className="fw-bold text-orange h5">Valor Del Crédito</label>
                <input 
                  type="number" 
                  className="form-control form-control-lg border-0 border-bottom rounded-0 mb-2" 
                  placeholder="$0"
                  onChange={(e) => setMonto(Number(e.target.value))}
                />
                <p className="small text-muted mb-5">Ingresa Un Valor Desde $1.000.000 Hasta $500.000.000 COP</p>

                <label className="fw-bold text-orange h5">Plazo En Meses</label>
                <select className="form-select form-select-lg border-0 border-bottom rounded-0 mb-5" onChange={(e) => setPlazo(Number(e.target.value))}>
                  <option value="12">12 Meses</option>
                  <option value="24">24 Meses</option>
                  <option value="36">36 Meses</option>
                  <option value="48">48 Meses</option>
                  <option value="60">60 Meses</option>
                </select>
                <button className="btn btn-orange w-100 py-3 fw-bold text-white text-uppercase fs-5">Solicitar Crédito</button>
              </div>

              <div className="col-md-6 bg-custom-gray d-flex flex-column justify-content-center align-items-center rounded p-4 text-center">
                <span className="fw-bold text-orange h4">CUOTA APROXIMADA</span>
                <h1 className="display-3 fw-bold text-orange my-3">
                  ${Math.round(cuota).toLocaleString('es-CO')}
                </h1>
                <p className="small text-muted">Los Datos Son De Referencia Y No Representan El Valor Final</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;