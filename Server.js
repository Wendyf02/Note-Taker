//add requires modules (dependencies)
const express = require("express");
const path = require("path");

//set up express App & set up initial port
const app = express();
const PORT = process.env.PORT || 3002;

//read URL or JSON
app.use(express.urlcoded({extended: true}));
app.use(express.json());

//use public folder
app.use(express.static("public"));


//add listener-effectively start our server
app.listen(PORT, function() {
      console.log("App listening on PORT: " + PORT);

});
