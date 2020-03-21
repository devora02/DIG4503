class NameSearch extends React.Component {

    getName() {

      let name = document.querySelector("#nameInput");
  
      fetch("/api/pokemon/name/" + name.value)
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
          <input type="text" id="nameInput" />
          <button onClick={() => { this.getName() } }>SUBMIT</button>
          <div id="results"></div>
        </div>
      );
    }
  
  }
  
  export default NameSearch;
