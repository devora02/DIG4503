const Express = require("express");
const App = Express();
const port = 80;

App.use("/static", Express.static("static"));

App.get("/api", function(req, res) {
    res.send("Something else, I guess?")
});

App.listen(port, function() {
    console.log("Server Running!");
});

