class IdSearch extends React.Component {

    getId() {

      let id = document.querySelector("#idInput");
  
      fetch("http://localhost:3000/api/pokemon/id/" + id.value)
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
        </div>
      );
    }
  
  }
  
  export default IdSearch;