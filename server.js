const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//app & port
const app = express();
//port for heroku deploy
const PORT = process.env.PORT || 3000;

//post routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));
app.use("api", apiRoutes);
app.use("/", htmlRoutes);


// starting the server
app.listen(PORT, () => console.log(`You are now listening on Port: ${PORT}`));