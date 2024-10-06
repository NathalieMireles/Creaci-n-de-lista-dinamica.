import React, { useState } from 'react';
import './App.css'; 

function App() {
  
  const [numeros, setNumeros] = useState([]); 

  const agregarNumero = () => {
    setNumeros([...numeros, 0]); 
  };

  const manejarCambioNumero = (indice, valor) => {
    const nuevosNumeros = [...numeros]; 
    nuevosNumeros[indice] = valor ? Number(valor) : 0; 
    setNumeros(nuevosNumeros); 
  };

 
  const eliminarNumero = (indice) => {
    const nuevosNumeros = numeros.filter((_, i) => i !== indice); 
    setNumeros(nuevosNumeros); 
  };

  const total = numeros.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Total: {total}</h1>
        <button onClick={agregarNumero}>Agregar Número</button> 
        <div className="inputs-container">
          {numeros.map((numero, indice) => (
            <div key={indice}>
              <input
                type="number"
                value={numero}
                onChange={(e) => manejarCambioNumero(indice, e.target.value)}
              />
              <button onClick={() => eliminarNumero(indice)}>Eliminar Numero</button> 
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;


