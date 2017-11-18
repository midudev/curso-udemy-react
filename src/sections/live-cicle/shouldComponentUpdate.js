import React, { Component } from 'react';

const inputStyle = {
  padding: '10px',
  fontSize: '24px',
  width: '400px',
  marginTop: '20px'
}

class ChildComponent extends Component {
  componentWillReceiveProps({ placeholderText }) {
    // Lo dejamos fuera de la condición para que se vea que siempre se dispara aunque la Prop no cambie
    console.log('El componente CHILD ha recibido nuevas Props')

    if (this.props.placeholderText !== placeholderText) {
      console.log('que contiene el texto:', placeholderText)
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.placeholderText !== nextProps.placeholderText
  }

  render() {
    return (
      <input style={inputStyle} placeholder={this.props.placeholderText} />
    )
  }
}

export default class ParentComponent extends Component {
  state = { placeholder: '', value: '' }

  handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      this.setState({ placeholder: this.state.value })
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div>
        <h1>Este INPUT envía su contenido<br />al componente CHILD al pulsar Enter</h1>
        <input style={inputStyle}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          placeholder='Parent Component'
          value={this.state.value}
        />
        <div>
          <ChildComponent placeholderText={this.state.placeholder} />
        </div>
      </div>
    )
  }
}