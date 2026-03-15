import React, { useState } from 'react';
import { creditsData } from '../data/creditsData';
import CreditCard from '../components/CreditCard';

const Inicio = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // logica para barra de busqueda de banner inicio
    const filteredCredits = creditsData.filter((credito) => {
        const nombreLimpio = credito.name.toLowerCase();
        const busquedaLimpia = searchTerm.toLowerCase().trim();
        return nombreLimpio.includes(busquedaLimpia);
    });

    return (
        <>
            {/* Banner*/}
            <section className="bg-orange text-white py-6 px-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7 text-start">
                            <h1 className="fw-bold display-4 mb-3" style={{ lineHeight: '1.0' }}>
                                Seguridad En Cada Paso, <br /> Respaldo En Cada Meta
                            </h1>
                            <p className="lead opacity-90 mb-4" style={{ maxWidth: '700px' }}>
                                Rediseñamos el acceso al crédito. Combinamos tecnología inteligente con
                                soluciones humanas para ofrecerte préstamos rápidos.
                            </p>

                            {/* Buscador del banner*/}
                            <div className="input-group w-75 shadow-sm">
                                <span className="input-group-text bg-white border-0">
                                    <i className="bi bi-search text-orange"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control border-0 py-2"
                                    placeholder="¿Qué crédito buscas hoy?"
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-md-5 d-none d-md-block text-end">
                            <img
                                src="/img/img_banner.png"
                                alt="Banner CrediSmart"
                                className="img-fluid"
                                style={{ maxHeight: '350px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Listados de productos crediticios*/}
            <main className="container py-5">
                <h2 className="fw-bold text-dark-blue mb-5 text-uppercase">Nuestros Productos</h2>
                <div className="row">
                    {filteredCredits.length > 0 ? (
                        filteredCredits.map((credito) => (
                            <CreditCard key={credito.id} {...credito} />
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <i className="bi bi-exclamation-circle fs-1 text-muted"></i>
                            <h3 className="text-muted mt-3">No hay créditos disponibles con ese nombre.</h3>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
};

export default Inicio;