import './App.css';
import Logo from './images/logo.svg';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className="compania-logo-contenedor">
        <img
          className="compania-logo"
          src={Logo}
          alt="Logo de la compania"
        />
      </div>

      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas></ListaDeTareas>
      </div>
    </div>
  );
}

export default App;
