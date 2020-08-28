const fs = require('fs')
const path = require('path')
const DB_PATH = path.join(__dirname, '../db/db.json')

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    const notesData = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'))
    res.json(notesData);
  });
  
  
  app.post("/api/notes", function(req, res) {

    const notesData = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'))
    const newNote = req.body
    notesData.push(newNote)

    fs.writeFileSync(DB_PATH, JSON.stringify(notesData))
    res.sendStatus(200)
  });

  app.delete("/api/notes/:id", function(req, res) {
   const notesData = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'))
   const savedNotes = notesData.filter((note) => {
     return note.id !== req.params.id})
   const newNotes = fs.writeFileSync(DB_PATH, JSON.stringify(savedNotes))
   res.send(newNotes);
  });
};
