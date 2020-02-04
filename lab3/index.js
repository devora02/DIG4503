const Express = require("express");
const App = Express();
const port = 8888;

App.use("/public", Express.static("public"));

App.get("/", function(req, res){
    res.send("Hello World!");
    console.log("Got a request!");
})

App.listen(8888, function(){
    console.log("Server running!");
});