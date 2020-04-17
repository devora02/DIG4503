import React from 'react';
import IdSearch from './components/IdSearch/';
import NameSearch from './components/NameSearch/';

function App(){
  return(
    <div>
    <IdSearch/>
    <NameSearch/>
    <div id="resultArea"></div>
    </div>
  );
}

export default App;
