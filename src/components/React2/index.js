import React, { Component } from 'react';
import Boton from './Boton';
import Formulario from './Formulario';

class index extends Component {//esto le da al componente caracteristicas, metodos y propiedades que TODO componente debe tener.
  constructor (props){
    super(props);//es para mandarle las propiedades de index a component 
    this.state = {//esto significa index.state (solo que asi no se usa)
      cont:0,
    }
  }//este es un constructor: recibe parámetros si un padre los otorga.

  incrementar = (event) => {//SIEMPRE que una funcion sucede por un evento, tiene como parametro, el evento.
    console.log(event.target);//solo es una bonita curiosidad, algo para tener en cuenta. Imprime el objeto del evento.
    let { cont } = this.state; //destructurando con nombres iguales
    cont++;
    this.setState({cont}/*Que es elo mismo que cont:cont*/)
  };

  render() {
    return(
      <div>
        <button onClick={this.incrementar}>
          {this.state.cont}
        </button>
        <Boton 
          valor = {this.state.cont}
          incrementar={this.incrementar}
          />
          <br/>
          <br/>
          <br/>
          <Formulario />
      </div>
    );
  }
};

export default index;