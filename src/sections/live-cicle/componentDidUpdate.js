import React, { Component } from 'react'

const counterStyle = {
  fontSize: '42px',
  fontWeight: 'bold',
  color: 'darkred',
  margin: '20px'
}

const buttonStyle = {
  padding: '10px',
  fontSize: '24px',
  width: '200px',
  marginTop: '20px'
}

export default class Counter extends Component {
  state = { counter: 1 }

  componentDidUpdate(prevProps, prevState) {
    // En el primer renderizado no se dispara
    console.log('PREV STATE', prevState)
    console.log('----------------------')
    console.log('CURRENT STATE', this.state)

    // Comprobamos las props actuales con las previas y realizamos una acción sólo
    // si son diferentes:
    if (prevProps.data !== this.props.data) {
      // obtenemos nuevos datos
    }
  }

  handleClick = () => {
    const counter = this.state.counter
    console.log('----------------------')
    this.setState({ counter: counter + 1 })
  }

  render() {
    return (
      <div>
        <div style={counterStyle}>{this.state.counter}</div>
        <button style={buttonStyle} onClick={this.handleClick}>+ increase</button>
      </div>
    )
  }
}