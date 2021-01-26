const fs = require("fs");
const path = require("path");


module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", function (err, data) {
            if (err) throw err;
            return res.json(JSON.parse(data));
        });
    });

    app.post("/api/notes", function (req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", function (err, data) {
            if (err) throw err;
            var notes = JSON.parse(data)
            console.log(notes);
            req.body.id = Math.floor(Math.random() * 1001); // creates a randomized ID for every notes that is created
            notes.push(req.body); // pushes the newly created note into the array

            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), function (err) {
                if (err) throw err;
                fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", function (err, data) {
                    if (err) throw err;
                    return res.json(JSON.parse(data));
                });
            });
        });
    });


    app.delete("/api/notes/:id", function (req, res) {
        notes.splice(req.params.id);
    });

};