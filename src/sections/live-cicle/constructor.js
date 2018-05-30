import React, { Component } from 'react'

// Nuestro componente
class MyComponent extends Component {

  // Este sería un constructor de Clase por defecto
  constructor(...args) {
    super(...args)
  }

  // Si necesitamos inicializar el State o las props lo hacemos así:
  constructor(props){
    super(props)
    state = {
      data: []
    }

    // Además, podemos bindear el contexto a los métodos de nuestro componente
    this.myMethod = this.myMethod.bind(this)
  }
}


// Clase Component de la librería React
class Component {
  constructor(props, context){
    super(props, context)
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
  }
}