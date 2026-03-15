import React from 'react';
import { Link } from 'react-router-dom';

const formatMoney = (value) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(value);
};

const CreditCard = ({ name, descripcion, image, interestRate, maxTerm, minAmount, maxAmount }) => {
  return (
    <div className="col-md-6 mb-5 px-4">
      <div className="card h-100 border-0 bg-custom-gray text-center pb-4 shadow-sm transition-all">
        
        {/* Imagen */}
        <div className="overflow-hidden rounded-top">
          <img
            src={image}
            className="card-img-top mb-3 img-hover-zoom"
            alt={`Crédito ${name}`}
            style={{ height: '280px', objectFit: 'cover' }}
          />
        </div>

        <div className="card-body d-flex flex-column">
          <h3 className="fw-bold text-dark-blue h4 mb-3">{name}</h3>
          
          <p className="text-muted px-3 mb-4 flex-grow-1" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            {descripcion}
          </p>

          {/* Información técnica del crédito */}
          <div className="mb-4 py-3 border-top border-bottom border-light">
            <div className="d-flex justify-content-around">
              <div className="small">
                <span className="d-block text-orange fw-bold">{interestRate}%</span>
                <span className="text-secondary">Interés</span>
              </div>
              <div className="small border-start border-end px-3">
                <span className="d-block text-orange fw-bold">{maxTerm} Meses</span>
                <span className="text-secondary">Plazo Máx.</span>
              </div>
              <div className="small">
                <span className="d-block text-orange fw-bold">Monto Máx.</span>
                <span className="text-secondary">{formatMoney(maxAmount)}</span>
              </div>
            </div>
          </div>

          <div className="mt-auto px-3">
            {/* para redireccionar el boton a formulario */}
            <Link 
              to="/solicitar" 
              className="btn btn-orange text-white fw-bold w-100 py-3 text-uppercase shadow-sm hover-push"
            >
              <i className="bi bi-cursor-fill me-2"></i>
              Solicitar Crédito
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;