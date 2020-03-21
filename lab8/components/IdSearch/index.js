class IdSearch extends React.Component {

    getId() {

      let name = document.querySelector("#idInput");
  
      fetch("/api/pokemon/id/" + name.value)
      .then((res) => { return res.json(); } )
      .then((processed) => {
        

        let resultElement = document.querySelector("#results");
  

        if(processed.error) {

          resultElement.innerHTML = "Could not find!";
        } else {

          resultElement.innerHTML = "Its ID is " + processed.id;
        }
  
      });
    }
  
    render() {
      return (
        <div>
          <input type="text" id="idInput" />
          <button onClick={() => { this.getId() } }>SUBMIT</button>
          <div id="results"></div>
        </div>
      );
    }
  
  }
  
  export default IdSearch;