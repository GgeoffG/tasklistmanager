const notes = require('express').Router();
const {readFromFile, readAndAppend, writeToFile,} = require('../helpers/fsUtils')
//POSSIBLE NOTE ID?
//const { v4: uuidv4 } = require('uuid');
notes.get('/', (req,res) => {
    readFromFile('./db/db.json')
    .then((data)=>res.json(JSON.parse(data)));
});


notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { text, title} = req.body;
  
    if (req.body) {
      const newNote = {
        text,
        title,
        //POSSIBLE NOTE ID?
        //tip_id: uuidv4(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error in adding note');
    }
  });
  
  module.exports = notes;
  