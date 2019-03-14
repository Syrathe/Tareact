import React, { Component } from 'react';
import Item from './Item';
class Formulario extends Component {

  constructor (props){
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      lista: [],
    }//el estado inicial siempre va adentro de constructor
  }

  /*  cambioNombre = (event) /*siempre recibe event como parametro por ser un event handler  => {
    this.setState({
      nombre: event.target.value
    });
  };

  cambioApellido = (event)/* siempre recibe event como parametro por ser un event handler  => {
    this.setState({
      apellido: event.target.value
    });
  };  */

  cambioInput = (event, propiedad) => {
    this.setState({
      [propiedad]: event.target.value
    });
  };/*Cuando la propiedad es dinamica, va entre corchetes*/

  agregar = (event) => {
    let nombre = this.state.nombre||'Fulano';
    let apellido = this.state.apellido||'De Tal';
    let lista = this.state.lista;

    lista.push({nombre, apellido});
    this.setState({
      lista,
      nombre: '',
      apellido: '',
    })
  }

  desplegar = () => (
    this.state.lista.map(({nombre, apellido}) => (
      <Item nombre = {nombre} apellido = {apellido} />
    ))
  );

  render () {
    console.log(this.state.lista);
    return (
      <div>
        <input 
          value={this.state.nombre}
          onChange={
            (event) => {return this.cambioInput(event, 'nombre')}/*Hecha mas cortita */
          }
        />
        <input 
          value={this.state.apellido}
          onChange={
            (event) => {return this.cambioInput(event, 'apellido')}
          }
        />
        <button onClick={this.agregar}>Agregar</button>
        <br/>
        <ul>
          {this.desplegar()}
        </ul>
      </div>
    );
  }
}

export default Formulario;