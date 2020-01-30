const Express = require("express");
const App = Express();
const port = 80;

App.use(Express.static("static"));

App.get("/", function(req, res) {
    res.send("Hello World!")
});

App.listen(port, function() {
    console.log("Server Running!");
});

