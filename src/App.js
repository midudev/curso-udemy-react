import React, { Component } from 'react'
// import FetchExample from './sections/fetch-example'
import ParentComponent from './sections/live-cicle/componenWillReceiveProps'

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
