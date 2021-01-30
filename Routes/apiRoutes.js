const fs = require('fs');
const noteData = require("../db/db.json");


module.exports = function(app) {



  // Method Get
  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

 // Method Post
 app.post("/api/notes", function(req, res) {
    noteData.push(req.body);
    
    fs.writeFile('./db/db.json',JSON.stringify(noteData), (err) =>
    err ? console.error(err) :  res.json(req.body)
  );



   




});





}