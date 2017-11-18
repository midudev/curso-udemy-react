import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class ChildComponent extends Component {
  componentDidMount () {
    console.log('El componente CHILD se ha montado en el DOM')
  }

  getInputValue = () => ReactDOM.findDOMNode(this.refs.input).value

  render () {
    return (
      <input  style={{ padding: '10px', fontSize:'24px', width: '400px'}}
              type='text' ref='input'
              defaultValue='estoy en un child component'
      />
    )
  }
}

export default class ParentComponent extends Component {
  componentDidMount () {
    console.log('El componente PARENT se ha montado en el DOM')
    
    // Mostramos como podemos acceder a las refs una vez montado el elemento en el DOM
    console.log(this.refs.childComponent.getInputValue())
  }

  render() {
    return (
      <div className={'parentContainer'}>
        <h1>Este es el componente Parent</h1>
        <ChildComponent ref="childComponent" />
      </div>
    )
  }
}