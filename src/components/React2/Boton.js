//STATELESS
import React from 'react';

const Boton = (props) => (
  <div>
    <button onClick={props.incrementar}>
      {props.valor}
    </button>
  </div>
);

export default Boton;
