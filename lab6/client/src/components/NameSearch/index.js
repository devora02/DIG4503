import React from 'react';
import "./index.css"

class NameSearch extends React.Component {
    
    pokemonName(event){
        //STOP THE DEFAULT FORM ACTION
        event.preventDefault();

        let element = document.querySelector("#name");

        fetch("http://localhost:80/name/" + element.value)
        .then((res) => {
            return res.json();
        })
        .then((processed) => {

            let reporting = document.querySelector("#resultArea");

            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name;
            }
        });

        element.value = "";
    }

    render() {
        return (
            <div>
                <form className="formOne" onSubmit={this.pokemonName}>
                    <h1>Pokemon Name:</h1>
                    <input id="name" type="text"/><br/>
                    <button>Submit!</button>
                    <h2>POKEMON</h2>
                    <div id="resultArea"></div>
                </form>
            </div>
        );
    }


}

export default NameSearch;