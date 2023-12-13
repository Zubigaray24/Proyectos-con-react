import './App.css';
import logo from './images/logo.svg';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const aumentarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='compania-logo-contenedor'>
        <img
          className='compania-logo'
          src={logo}
          alt='Logo de compania'
        />
      </div>
      <div className='contenedor-contador'>
        <Contador
          numClics={numClics}
        >

        </Contador>
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={aumentarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
