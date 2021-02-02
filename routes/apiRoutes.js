const fs = require('fs');
const noteData = require("../db/db.json");
const uniqid = require('uniqid');



module.exports = function(app) {



  // Method Get
  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

 // Method Post
 app.post("/api/notes", function(req, res) {
    
    let newNote = { 
      id:uniqid(), 
      text:req.body.text,
      title:req.body.title,
    }
    noteData.push(newNote);
    
    fs.writeFile('./db/db.json',JSON.stringify(noteData), (err) =>
    err ? console.error(err) :  res.json(newNote)
  ); 

});

// Method Delete

app.delete("/api/notes/:id", function(req, res) {
 

for (let index = 0; index < noteData.length; index++) {
  if (req.params.id == noteData[index].id) {
    console.log(noteData[index])

    noteData.splice(index,1)
      console.log(noteData)
    
      fs.writeFile('./db/db.json',JSON.stringify(noteData), (err) =>
      err ? console.error(err) :  res.json(noteData)
    ); 



  }
  
}



});






}