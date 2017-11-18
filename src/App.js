import React, { Component } from 'react'
// import FetchExample from './sections/fetch-example'
import ParentComponent from './sections/live-cicle/componentDidMount'

class App extends Component {
  render () {
    return (
      <div className="App">
        <ParentComponent />
      </div>
    );
  }
}

export default App;
