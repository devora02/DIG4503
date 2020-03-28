class NameSearch extends React.Component {

    getName() {

      let name = document.querySelector("#nameInput");
  
      fetch("http://localhost:3000/api/pokemon/name/" + name.value)
      .then((res) => { return res.json(); } )
      .then((processed) => {
        
        let resultElement = document.querySelector("#results");
  
        if(processed.error) {

          resultElement.innerHTML = "Could not find!";
        } else {

          resultElement.innerHTML = "Its NAME is " + processed.name;
        }
  
      });
    }
  
    render() {
      return (
        <div>
          <input type="text" id="nameInput" />
          <button onClick={() => { this.getName() } }>SUBMIT</button>
        </div>
      );
    }
  
  }
  
  export default NameSearch;
