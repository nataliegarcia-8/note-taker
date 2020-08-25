const notesData = require("../notes");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(notesData);
  });


  app.post("/api/notes", function(req, res) {
  
  });

  app.post("/api/notes/:id", function(req, res) {
   
  });
};
