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

    //app.delete --> /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.


    app.delete("/api/notes/:id", (req, res) => {
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", function (err, data) {
            if (err) {
                console.log(err);
            } else {
                noteArray = JSON.parse(data)
                const id = req.params.id;
                const noteIndex = noteArray.findIndex(note => note.id == id);
                noteArray.splice(noteIndex, 1);
                res.json(noteArray)
            
                json = JSON.stringify(noteArray);
                fs.writeFile("./db/db.json", json, "utf-8", function (err) {
                    if (err) {
                        console.log(err);
                        return
                    }
                });
            }
        })
    })
    // app.delete("/api/notes/:id", (req, res) => {
    //     fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", function (err, data) {
    //         if (err) throw err;
    //         var notes = JSON.parse(data)

    //         notes.splice(req.body.id); // removes items
    //         // notes.filter(data (req.body.id))
    //           
    //         fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), function (err) {
    //             if (err) throw err;
    //                 return res.json(JSON.parse(data));
    //         });
    //     });
    // });
};