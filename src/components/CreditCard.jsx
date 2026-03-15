import React from 'react';

const CreditCard = ({ name, descripcion, image, interestRate, maxTerm, minAmount, maxAmount }) => {

  // Función para que los números se vean en pesos cop
  const formatMoney = (value) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="col-md-6 mb-5 px-4">
      <div className="card h-100 border-0 bg-custom-gray text-center pb-4 shadow-sm">
        {/* Imagen de cards crédito */}
        <img
          src={image}
          className="card-img-top mb-3"
          alt={name}
          style={{ height: '280px', objectFit: 'cover' }}
        />

        <div className="card-body d-flex flex-column">
          <h3 className="fw-bold text-dark-blue h4 mb-3">{name}</h3>
          <p className="text-muted px-3 mb-4" style={{ fontSize: '0.95rem' }}>
            {descripcion}
          </p>

          <div className="mb-4">
            <p className="mb-1 small text-secondary">Tasa De Interés: {interestRate}%</p>
            <p className="mb-1 small text-secondary">Monto Disponible: {formatMoney(minAmount)} - {formatMoney(maxAmount)} COP</p>
            <p className="mb-1 small text-secondary">Plazo Máximo: Hasta {maxTerm} Meses</p>
          </div>

          <div className="mt-auto">
            <button className="btn btn-orange text-white fw-bold px-5 py-2 text-uppercase">
              Solicitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;