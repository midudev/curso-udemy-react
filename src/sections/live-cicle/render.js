import React, { Component } from 'react';

export default class PerroEsSpaniel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spanielDescription: ''
    }
  }

  render() {
    // Declaramos variables y recuperamos valores que vamos a necesitar en este mismo método
    const { raza, edad, color } = this.props

    return (
      <div>
        // Podemos retornar elementos JSX
        <h2 className={'dogHeading'}>El Perro Spaniel</h2>

        // Cadenas de texto libre
        {'Cadena de texto Perro Spaniel'}

        // Renderizado Condicional
        { raza && <span>Descripción: {`Este perro ${this.state.spanielDescription}`}</span> }
        
        // Evaluación de valores de variables
        {`Este perro de raza ${raza} tiene ${edad} años y es de color ${color}`}
      </div>
    )
  }
}