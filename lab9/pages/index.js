import React from 'react';
import IdSearch from "../components/IdSearch/";
import NameSearch from "../components/NameSearch/";
import TypeSearch from "../components/TypeSearch";

const Home = () => {
  return (
    <div>
    <h1>POKEMON!</h1>
    <h2>ID:</h2>
    <IdSearch/>
    <h2>NAME:</h2>
    <NameSearch/>
    <h2>TYPE:</h2>
    <TypeSearch/>
    <div id="results"></div>
    </div>
  );
}

export default Home;