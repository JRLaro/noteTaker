

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(activeNote);

    });

    app.post("/api/notes", function (req, res) {
        res.json("db.json");
    });

    app.delete("/api/notes/:id", function (req, res) {
        res.json("db.json");
    });





};