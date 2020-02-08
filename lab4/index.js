const Express = require("express");
const App = Express();
const port = 80;
const chalk = require('chalk');

const Pokemon = require("./Pokemon.js");
const pokemons = require('json-pokemon');
const pokemon = pokemons[0];


for(let i = 0; i < 99; i++)
{
    let name = pokemons.name;
    let id = pokemons.id;
    pokemons.push(new Pokemon(name, id));
}

App.get("/pokemon/name/:name", (req, res) => {
    pokemon.forEach((value)=> {
        if(value.name == req.params.name) {
            res.send(value);
            console.log(chalk.green(value));
        }
    });

    res.send("Invalid!");
    console.log(chalk.red(value));

});

App.get("/pokemon/id/:id", (req, res) => {
    pokemon.forEach((value)=> {
        if(value.id == req.params.id) {
            res.send(value);
            console.log(chalk.green(value));
        }
    });

    res.send("Invalid!");
    console.log(chalk.red(value));

});

App.listen(port, () => {
    console.log(chalk.blue("Server running!"));
});
