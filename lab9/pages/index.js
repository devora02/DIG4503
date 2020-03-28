import React from 'react';
import IdSearch from "../components/IdSearch/";
import NameSearch from "../components/NameSearch/";
import TypeSearch from "../components/TypeSearch";

const Home = () => {
  return (
    <div>
    <h1>POKEMON!</h1>
    <IdSearch/>
    <NameSearch/>
    <TypeSearch/>
    <div id="results"></div>
    </div>
  );
}

export default Home;