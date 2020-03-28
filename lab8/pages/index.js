import React from 'react';
import IdSearch from "../components/IdSearch/";
import NameSearch from "../components/NameSearch/";

const Home = () => {
  return (
    <div>
    <p>Hi!</p>
    <IdSearch/>
    <NameSearch/>
    <div id="results"></div>
    </div>
  );
}

export default Home;

