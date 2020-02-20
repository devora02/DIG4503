import React from 'react';

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
                <h1>Pokemon Name:</h1>
                <form onSubmit={this.pokemonName}>
                    <input id="name" type="text"/>
                    <button>Submit!</button>
                </form>
            </div>
        );
    }


}

export default NameSearch;
