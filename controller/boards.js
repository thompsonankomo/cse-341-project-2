require('dotenv').config();
const ObjectId = require('mongoose').Types.ObjectId;
const boards = require('../models/boards');


// GET all contacts
// controllers/contacts.js
const getAll = async (req, res) => {
   //#swagger.tags=['Boards']
  try {
    const result = await boards.find({});
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// GET a single contact by ID
const getSingle = async (req, res) => {
   //#swagger.tags=['boards']
  try {
    const id = new ObjectId(req.params.id)
    const result = await boards.findOne({ _id: id })

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: ' Board not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


//Create new Board function
const createBoard = async (req, res) => {
   //#swagger.tags=['Boards']
  try {
    const data = {
      boardName: req.body.boardName,
      boardFinish: req.body.lastName,
      email: req.body.email,
      boardColor: req.body.favoriteColor,
      
      
      
    }
    const result = await Boards.create(data);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' } || 'some error occured while updating the user.');
  }


};

//Update contact function
const updateBoard = async (req, res) => {
   //#swagger.tags=['Contacts']
  try {
    const id = new ObjectId(req.params.id)
    const data = {
      _id: id,
      boardName: req.body.boardName,
      boardFinish: req.body.lastName,
      email: req.body.email,
      boardColor: req.body.favoriteColor,
      
    
      
    }
    const result = await Contacts.replaceOne({ _id: id }, data)
    if (result.modifiedCount > 0) {
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' } || 'some error occured while updating the user.');
  }
};

//Delete contact function
const deleteBoard = async (req, res) => {
   //#swagger.tags=['Contacts']
  try {
    const id = new ObjectId(req.params.id)
    const result = await Boards.deleteOne({ _id: id });
    if (result.deletedCount > 0) {
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' } || 'some error occured while updating the user.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createBoard,
  updateBoard,
  deleteBoard
}