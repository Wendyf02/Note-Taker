//Dependecies

const path = require("path");

module.exports = function(app) {

//HTML-Route to go to note page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });


//HTML Route to go to index page

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });



}