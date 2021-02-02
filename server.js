//add requires modules (dependencies)
const express = require("express");
const path = require("path");

//set up express App & set up initial port
const app = express();
const PORT = process.env.PORT || 8002;

//read URL or JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//use public folder
app.use(express.static("public"));

//router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//add listener-effectively start our server
app.listen(PORT, function() {
      console.log("App listening on PORT: " + PORT);

});
