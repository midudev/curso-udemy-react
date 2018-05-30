import React, { Component } from 'react';

export default class PerroEsSpaniel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      spanielDescription: ''
    }
  }

  componentWillMount () {
    let spanielDescription
    if (this.props.raza === 'spaniel') {
      spanielDescription = 'es un Spaniel pequeño y de color negro';
    } else {
      spanielDescription = 'no es un Spaniel';
    }
    this.setState({ spanielDescription });
  }

  render () {
    return (
      <div>
        <h2>Perro Spaniel</h2>
        <span>Descripción: {`Este perro ${this.state.spanielDescription}`}</span>
      </div>
    )
  }
}