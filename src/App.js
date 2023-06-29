import './App.css';
import React from 'react';
import Button from './componentes/Button';
import logoFree from './imagenes/testimonio-emma.png';


function App() {
  return (
    <div className="App">
      <div className='freecodecomcamp-logo-contenedor'>
        <img className ='freecodecomcamp-logo'
        src={logoFree} alt='logo de freecodecamp'
        />
        <div className='contenedor-principal'>

       <Button/>
                 
        </div>
      </div>
     
    </div>
  );
}

export default App;
