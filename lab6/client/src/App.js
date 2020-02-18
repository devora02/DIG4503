import React from 'react';
import IdSearch from './components/IdSearch';
import NameSearch from './components/NameSearch';

class App extends React.Component {
  render() {
    return(
      <div>
        <IdSearch />
        <NameSearch />
        <h1>Result!</h1>
        <div id="resultArea"></div>
      </div>
    );
  }
}

export default App;
