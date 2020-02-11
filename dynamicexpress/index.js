const Express = require("express");
const App = Express();
const port = 80;

const People = require("./People.js");
let people = new People();

App.get("/people/name/:name", (req, res) => {
        res.send(people.readName(req));
    });
        res.send("Invalid!");


App.get("/people/color/:color", (req, res) => {
    res.send(people.readColor(req));
    });


App.listen(port, () => {
    console.log("Server running!");
    });
