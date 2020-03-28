class TypeSearch extends React.Component {

    getType() {

      let type = document.querySelector("#typeInput");
  
      fetch("http://localhost:3000/api/pokemon/type/" + name.value)
      .then((res) => { return res.json(); } )
      .then((processed) => {
        
        let resultElement = document.querySelector("#results");
  
        if(processed.error) {

          resultElement.innerHTML = "Could not find!";
        } else {

          resultElement.innerHTML = "Its NAME is " + processed.type;
        }
  
      });
    }
  
    render() {
      return (
        <div>
          <input type="text" id="typeInput" />
          <button onClick={() => { this.getType() } }>SUBMIT</button>
        </div>
      );
    }
  
  }
  
  export default TypeSearch;