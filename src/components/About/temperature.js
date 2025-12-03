import React, { useState, useEffect } from 'react';

const TemperatureMonitor = () => {
    const [temperature, setTemperature] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(null);

    const API_URL = 'http://192.168.80.51:8000/api/temperature/latest/';

    const fetchTemperature = async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URL);
            
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            
            const data = await response.json();
            setTemperature(data);
            setLastUpdate(new Date());
            setError(null);
        } catch (err) {
            setError('Error al obtener la temperatura');
            console.error('Error fetching temperature:', err);
        } finally {
            setLoading(false);
        }
    };

    // Cargar datos iniciales
    useEffect(() => {
        fetchTemperature();
    }, []);

    // Actualizar cada minuto (60000 ms)
    useEffect(() => {
        const interval = setInterval(() => {
            fetchTemperature();
        }, 60000); // 60 segundos

        // Limpiar intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="temperature-monitor">
            {loading && !temperature ? (
                <div className="loading">Cargando temperatura...</div>
            ) : error ? (
                <div className="error-message">
                    {error}
                    <button onClick={fetchTemperature} style={{marginLeft: '10px'}}>
                        Reintentar
                    </button>
                </div>
            ) : temperature ? (
                <div className="temperature-data">
                    <div className="temperature-value">
                        {temperature.temperature} °C
                    </div>
                    
                    <div className="temperature-details">
                        <div className="detail-item">
                            <span className="label">Valor RAW:</span>
                            <span className="value">{temperature.raw_value}</span>
                        </div>
                        <div className="detail-item">
                            <span className="label">Voltaje:</span>
                            <span className="value">{temperature.voltage}V</span>
                        </div>
                        <div className="detail-item">
                            <span className="label">Timestamp:</span>
                            <span className="value">
                                {new Date(temperature.timestamp).toLocaleString()}
                            </span>
                        </div>
                        {lastUpdate && (
                            <div className="detail-item">
                                <span className="label">Última actualización:</span>
                                <span className="value">
                                    {lastUpdate.toLocaleString()}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default TemperatureMonitor;