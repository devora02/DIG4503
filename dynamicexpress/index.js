const Express = require("express");
const App = Express();
const port = 80;
const Person = require("./Person.js");
const faker = require('faker');

let people = [];

for(let i = 0; i < 87; i++){
    let randomName = faker.name.findName();
    let randomColor = faker.commerce.color();
    people.push(new Person (randomName, randomColor));
}

App.get("/people/name/:name", (req, res) => {
    for(let i = 0; i < people.length; i++) {
        if(req.params.name == people[i].name){
            res.send(people[i]);
        }
    }
});

App.get("/people/color/:color", (req, res) => {
    for(let i = 0; i < people.length; i++) {
        if(req.params.color == people[i].color){
            res.send(people[i]);
        } 
    }
    res.send("Invalid!");
});

App.listen(port, () => {
    console.log("Server running!");
});
