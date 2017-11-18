import React, { Component } from 'react';

class ChildComponent extends Component {
  componentDidMount () {
    console.log('El componente CHILD se ha montado en el DOM')
  }

  render () {
    return (
      <h3>Este es el componente Child</h3>
    )
  }
}

export default class ParentComponent extends Component {
  componentDidMount () {
    console.log('El componente PARENT se ha montado en el DOM')
  }

  render() {
    return (
      <div>
        <h1>Este es el componente Parent</h1>
        <ChildComponent />
      </div>
    )
  }
}