//dependencies 
const express = require("express");


//app & port
const app = express();
//port for heroku deploy
const PORT = process.env.PORT || 3000;

//post routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// starting the server
// app.listen(PORT, () => console.log(`You are now listening on Port: ${PORT}`));

app.listen(PORT, function (req, res) {
    console.log(`You are now listening on Port: ${PORT}`)
});