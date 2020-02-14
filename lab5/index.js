const Express = require("express");
const App = Express();
const port = 80;
const chalk = require('chalk');
const pokemon = require('json-pokemon');

App.use("/", Express.static("public"));

//FOR ID NUMBER OF POKEMON
App.get("/id/:id", (req, res) => {
    let result = {"error": "Pokemon cannot be found!"};

    pokemon.forEach((value)=> {
        if(req.params.id == value.id) {
             result = value;
        }
    });
     //RESPONSES USES JSON()
     res.json(result);
     if(result.error){
         console.log(chalk.red(req.path));
     }
     else{console.log(chalk.green(req.path));
    }
});

//FOR NAME OF POKEMON
App.get("/name/:name", (req, res) => {
    let result = {"error": "Pokemon cannot be found!"};
    pokemon.forEach((value)=> {
        if(req.params.name == value.name) {
            result = value;
        }
    });
         //RESPONSES USES JSON()
         res.json(result);
         if(result.error){
            console.log(chalk.red(req.path));
        }
        else{console.log(chalk.green(req.path));
       }
});

//SERVER IS LISTENING
App.listen(port, () => {
    console.log("Server running!");
});
