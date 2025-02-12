import React, { useState } from 'react';

function ConversorTemperatura() {
  const [temperatura, setTemperatura] = useState('');
  const [conversion, setConversion] = useState('');

  const convertir = (e) => {
    const valor = parseFloat(temperatura);

    if (e.target.name === 'aFahrenheit') {
      const resultado = (valor * 9/5) + 32;
      setConversion(`${resultado.toFixed(2)} °F`);
    } else if (e.target.name === 'aCelsius') {
      const resultado = (valor - 32) * 5/9;
      setConversion(`${resultado.toFixed(2)} °C`);
    }
  };

  return (
    <div>
      <h1>Conversor de Temperatura</h1>
      <input 
        type="number"
        value={temperatura}
        onChange={(e) => setTemperatura(e.target.value)}
        placeholder="Ingrese la temperatura"
      />
      <button name="aFahrenheit" onClick={convertir}>Convertir a Fahrenheit</button>
      <button name="aCelsius" onClick={convertir}>Convertir a Celsius</button>
      <p>Resultado: {conversion}</p>
    </div>
  );
}

export default ConversorTemperatura;
