import React, { Component } from 'react'

class Counter extends Component {
  state = { counter: 0 }

  componentDidMount () {
    this.intervalId = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, 500)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
    clearInterval(this.intervalId)
  }

  render () {
    return <span>{this.state.counter}</span>
  }
}

export default class ScrollerComponent extends Component {
  state = { showCounter: true }

  handleClick = () => {
    this.setState({ showCounter: false })
  }

  render () {
    return (
      <div>
        <p style={{fontSize: '42px'}}>{this.state.showCounter && <Counter />}</p>
        <button style={{ padding: '16px' }} onClick={this.handleClick}>Desmontar componente Counter</button>
      </div>
    )
  }
}
