const Express = require("express");
const App = Express();
const port = 80;
const Person = require("./Person.js");

let p = new Person("Amiel", "blue");

App.get("/", function(Request, Response){
    Response.send("Hi!");
    console.log("Got a request!");
});

App.get("/name", function(Request, Response){
    Response.send(p.getName());
});

App.listen(port, function(){
    console.log("Server Running!");
});
