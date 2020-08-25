const fs = require('fs')
const path = require('path')
const DB_PATH = path.join(__dirname, '../db/db.json')

/**
 * @returns {any[]} Notes from Database
 */
const fetchDB = () => JSON.parse(fs.readFileSync(DB_PATH, 'utf8'))

/**
 * 
 * @param {Object} note New Note for Database 
 * @returns {void} void
 */
const writeDB = (note) => fs.writeFileSync(DB_PATH, JSON.stringify(note))

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    const notesData = fetchDB()

    res.json(notesData);
  });


  app.post("/api/notes", function (req, res) {
    const notesData = fetchDB()
    const newNote = req.body

    notesData.push(newNote)

    writeDB(newNote)

    res.sendStatus(200)
  });

  app.delete("/api/notes/:id", function (req, res) {
    console.log(req.params.id)
  });
};
