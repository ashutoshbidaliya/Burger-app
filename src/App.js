import React, { Component } from 'react';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    console.log('Rendering App,js');
    return (
      <div className="App">
      <Layout>
        <p>Test </p>
      </Layout>
      </div>
    );
  }
}

export default App;
