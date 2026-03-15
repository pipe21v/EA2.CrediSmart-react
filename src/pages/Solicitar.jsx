import React, { useState, useEffect } from 'react';

{/* CAPTURAR TODOS LOS DATOS */ }
const Solicitar = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        cedula: '',
        cedulaExtra1: '',
        cedulaExtra2: '',
        telefono: '',
        email: '',
        tipoCredito: '',
        monto: '',
        plazo: '12',
        destino: '',
        empresa: '',
        cargo: '',
        ingresos: ''
    });

    const [solicitudes, setSolicitudes] = useState([]);
    const [cuotaEstimada, setCuotaEstimada] = useState(0);
    const [enviado, setEnviado] = useState(false);

    {/* calcular cuota mensual estimada */ }
    useEffect(() => {
        const tasa = 0.018;
        const p = parseFloat(formData.monto);
        const n = parseInt(formData.plazo);
        if (p > 0 && n > 0) {
            const cuota = (p * tasa * Math.pow(1 + tasa, n)) / (Math.pow(1 + tasa, n) - 1);
            setCuotaEstimada(cuota);
        } else {
            setCuotaEstimada(0);
        }
    }, [formData.monto, formData.plazo]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    {/* para mostrar mensaje exitoso */ }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSolicitudes([...solicitudes, { ...formData, id: Date.now(), cuota: cuotaEstimada }]);
        setEnviado(true);
        setTimeout(() => setEnviado(false), 5000);
    };

    {/* limpiar formulario */ }
    const handleLimpiar = () => {
        setFormData({
            nombre: '', cedula: '', cedulaExtra1: '', cedulaExtra2: '',
            telefono: '', email: '', tipoCredito: '', monto: '',
            plazo: '12', destino: '', empresa: '', cargo: '', ingresos: ''
        });
    };

    return (
        <div className="container py-5 bg-white">
            <div className="row">
                <div className="col-md-7">
                    <h1 className="fw-bold text-dark-blue mb-4">FORMULARIO</h1>

                    <form onSubmit={handleSubmit}>
                        {/* datos personales */}
                        <div className="bg-light p-3 rounded mb-4 shadow-sm">
                            <h5 className="fw-bold text-dark-blue mb-3">Datos Personales</h5>

                            <label className="text-orange small fw-bold">Nombre Completo</label>
                            <input type="text" name="nombre" className="form-control mb-3" value={formData.nombre} onChange={handleChange} required />

                            <label className="text-orange small fw-bold">Cedula</label>
                            <input type="text" name="cedula" className="form-control mb-2" value={formData.cedula} onChange={handleChange} required />
                            <div className="row mb-3">
                                <div className="col-6">
                                    <input type="text" name="cedulaExtra1" className="form-control" value={formData.cedulaExtra1} onChange={handleChange} />
                                </div>
                                <div className="col-6">
                                    <input type="text" name="cedulaExtra2" className="form-control" value={formData.cedulaExtra2} onChange={handleChange} />
                                </div>
                            </div>

                            <label className="text-orange small fw-bold">Telefono</label>
                            <input type="tel" name="telefono" className="form-control mb-3" value={formData.telefono} onChange={handleChange} required />

                            <label className="text-orange small fw-bold">Email</label>
                            <input type="email" name="email" className="form-control mb-3" value={formData.email} onChange={handleChange} required />
                        </div>

                        {/* datos del credito */}
                        <div className="bg-light p-3 rounded mb-4 shadow-sm">
                            <h5 className="fw-bold text-dark-blue mb-3">Datos Del Crédito</h5>

                            <label className="text-orange small fw-bold">Tipo De Credito</label>
                            <input type="text" name="tipoCredito" className="form-control mb-3" value={formData.tipoCredito} onChange={handleChange} required />

                            <label className="text-orange small fw-bold">Monto Solicitado</label>
                            <input type="number" name="monto" className="form-control mb-3" value={formData.monto} onChange={handleChange} required />

                            <label className="text-orange small fw-bold">Plazo En Meses</label>
                            <input type="number" name="plazo" className="form-control mb-3" value={formData.plazo} onChange={handleChange} required />

                            <label className="text-orange small fw-bold">Destino Del Credito</label>
                            <input type="text" name="destino" className="form-control mb-3" value={formData.destino} onChange={handleChange} required />
                        </div>

                        {/* datos laborales */}
                        <div className="bg-light p-3 rounded mb-4 shadow-sm">
                            <h5 className="fw-bold text-dark-blue mb-3">Datos Laborales</h5>

                            <label className="text-orange small fw-bold">Empresa Donde Trabaja</label>
                            <input type="text" name="empresa" className="form-control mb-3" value={formData.empresa} onChange={handleChange} required />

                            <label className="text-orange small fw-bold">Cargo</label>
                            <input type="text" name="cargo" className="form-control mb-3" value={formData.cargo} onChange={handleChange} required />

                            <label className="text-orange small fw-bold">Ingresos Mensuales</label>
                            <input type="number" name="ingresos" className="form-control mb-3" value={formData.ingresos} onChange={handleChange} required />
                        </div>

                        <button type="submit" className="btn btn-orange text-white fw-bold w-50 py-3 mb-2 d-block">Enviar Solicitud</button>
                        <button type="button" className="btn btn-orange text-white fw-bold w-50 py-3 d-block" onClick={handleLimpiar}>Limpiar Formulario</button>
                    </form>
                </div>

                {/* parte derecha de la pagina*/}
                <div className="col-md-5 d-flex flex-column align-items-center justify-content-center">
                    <img src="/img/logo.png" alt="Logo" className="img-fluid mb-4 w-75 opacity-50" />

                    {formData.monto > 0 && (
                        <div className="text-center p-4 border rounded shadow-sm w-75">
                            <p className="text-muted mb-1">Cuota mensual estimada:</p>
                            <h2 className="fw-bold text-dark-blue">
                                ${Math.round(cuotaEstimada).toLocaleString('es-CO')}
                            </h2>
                        </div>
                    )}

                    {enviado && (
                        <div className="alert alert-success mt-4">
                            Solicitud procesada con éxito.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Solicitar;