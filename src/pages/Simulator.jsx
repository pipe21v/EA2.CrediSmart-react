import React, { useState } from 'react';

const Simulator = () => {
  // 1. Estados para capturar los datos del usuario
  // Iniciamos en 1.000.000 para que no aparezca en $0 al entrar
  const [monto, setMonto] = useState(1000000);
  const [plazo, setPlazo] = useState(12);
  const tasaMensual = 0.018; // Tasa del 1.8% Mes Vencido

  // 2. Lógica Financiera (Fórmula de cuota nivelada / Sistema Francés)
  const calcularCuota = () => {
    if (monto <= 0) return 0;
    const i = tasaMensual;
    const n = plazo;
    // Fórmula: C = [P * i * (1 + i)^n] / [(1 + i)^n - 1]
    const cuota = (monto * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    return cuota;
  };

  const cuotaFinal = calcularCuota();

  return (
    <div className="min-vh-100 bg-white">
      {/* Header del Simulador */}
      <section className="bg-orange text-white py-5 px-4 text-center">
        <h1 className="fw-bold display-4 text-uppercase">Simulador de Crédito</h1>
        <div className="container mt-4 d-flex justify-content-center gap-5 d-none d-md-flex">
          <div><i className="bi bi-cash-coin fs-1"></i><p>Préstamos desde $1M</p></div>
          <div><i className="bi bi-calendar3 fs-1"></i><p>Plazos hasta 60 meses</p></div>
          <div><i className="bi bi-person-check fs-1"></i><p>Para personas de 18 a 60 años</p></div>
        </div>
      </section>

      {/* Cuerpo del Simulador */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-10 shadow-lg rounded p-5 border">
            <h3 className="text-center fw-bold mb-5 text-dark-blue">
              Ingresa Los Datos Y Calcula El Valor Aproximado De Tu Cuota
            </h3>
            
            <div className="row">
              {/* Columna de Entradas (Inputs) */}
              <div className="col-md-6">
                <label className="fw-bold text-orange h5">Valor Del Crédito</label>
                <input 
                  type="number" 
                  className={`form-control form-control-lg border-0 border-bottom rounded-0 mb-2 ${monto > 500000000 ? 'is-invalid' : ''}`} 
                  placeholder="Ej: 1000000"
                  value={monto}
                  onChange={(e) => setMonto(Number(e.target.value))}
                />
                
                {monto > 500000000 ? (
                  <div className="text-danger small mb-3">El monto máximo es de $500.000.000</div>
                ) : (
                  <p className="small text-muted mb-5">Ingresa Un Valor Desde $1.000.000 Hasta $500.000.000 COP</p>
                )}

                <label className="fw-bold text-orange h5">Plazo En Meses</label>
                <select 
                  className="form-select form-select-lg border-0 border-bottom rounded-0 mb-5" 
                  value={plazo}
                  onChange={(e) => setPlazo(Number(e.target.value))}
                >
                  <option value="12">12 Meses</option>
                  <option value="24">24 Meses</option>
                  <option value="36">36 Meses</option>
                  <option value="48">48 Meses</option>
                  <option value="60">60 Meses</option>
                </select>

                <button className="btn btn-orange w-100 py-3 fw-bold text-white text-uppercase fs-5 shadow-sm">
                  Solicitar Crédito
                </button>
              </div>

              {/* Columna de Resultado (Output) */}
              <div className="col-md-6 bg-custom-gray d-flex flex-column justify-content-center align-items-center rounded p-4 text-center mt-4 mt-md-0">
                <span className="fw-bold text-orange h4">CUOTA APROXIMADA</span>
                <h1 className="display-4 fw-bold text-dark-blue my-3">
                  ${Math.round(cuotaFinal).toLocaleString('es-CO')}
                </h1>
                <p className="small text-muted px-4">
                  Los datos son de referencia basados en una tasa del {tasaMensual * 100}% E.M y no representan el valor final.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;