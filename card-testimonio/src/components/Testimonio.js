import React from 'react';
import '../css/Testimonio.css';


function Testimonio(props) {
  return (
    <article className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../images/testimonio-${props.imagen}.jpg`)}
        alt={`Fotografia de ${props.nombre}`}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>
          "{props.testimonio}"
        </p>
      </div>
    </article>
  );
}

export default Testimonio;