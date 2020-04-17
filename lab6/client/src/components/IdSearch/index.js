import React from 'react';
import "./index.css"

class IdSearch extends React.Component {
    
    pokemonID(event){
        //STOP THE DEFAULT FORM ACTION
        event.preventDefault();

        let element = document.querySelector("#id");

        fetch("http://localhost:80/id/" + element.value)
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
                <form className="formOne" onSubmit={this.pokemonID}>
                    <h1>Pokemon ID:</h1>
                    <input id="id" type="text"/><br/>
                    <button>Submit!</button>
                </form>
            </div>
        );
    }


}

export default IdSearch;