import React, { Component } from 'react';
import Like from './Like';
import Dislike from './Dislike';

class index extends Component {//esto le da al componente caracteristicas, metodos y propiedades que TODO componente debe tener.
  constructor (props){
    super(props);//es para mandarle las propiedades de index a component 
    this.state = {//esto significa index.state (solo que asi no se usa)
      likes:0,
    }
  }//este es un constructor: recibe parámetros si un padre los otorga.

  incrementar = (event) => {//SIEMPRE que una funcion sucede por un evento, tiene como parametro, el evento.
    console.log(event.target)
    let { likes } = this.state; //destructurando con nombres iguales
    likes++;
    this.setState({likes}/*Que es lo mismo que likes:likes*/)
  };

  decrementar = (event) => {//SIEMPRE que una funcion sucede por un evento, tiene como parametro, el evento.
    console.log(event.target)
    let { likes } = this.state; //destructurando con nombres iguales
    likes--;
    this.setState({likes}/*Que es lo mismo que likes:likes*/)
  };

  render () {
    return (
      <div>
        <Like
          likes = { this.state.likes}
          incrementar = {this.incrementar}
          />{`${this.state.likes} `}
        <Dislike 
          likes = { this.state.likes}
          decrementar = {this.decrementar}
        />
      </div>
    );
  }
}


export default index;