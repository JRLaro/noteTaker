var path = require("path");
// const index = require("../public/assets/js/index");

//html get request
module.exports = function (app) {
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    //by default the user will be rerouted to the homepage
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
};