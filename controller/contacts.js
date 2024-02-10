require('dotenv').config();
const ObjectId = require('mongoose').Types.ObjectId;
const contacts = require('../models/contacts');


// GET all contacts
// controllers/contacts.js
const getAll = async (req, res) => {
   //#swagger.tags=['contacts']
  try {
    const result = await contacts.find({});
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// GET a single contact by ID
const getSingle = async (req, res) => {
   //#swagger.tags=['contacts']
  try {
    const id = new ObjectId(req.params.id)
    const result = await contacts.findOne({ _id: id })

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: ' Contacts not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


//Create new Contacts function
const createContacts = async (req, res) => {
   //#swagger.tags=['contacts']
  try {
    const data = {
      ContactsName: req.body.ContactsName,
      ContactsFinish: req.body.lastName,
      email: req.body.email,
      ContactsColor: req.body.favoriteColor,
      
      
      
    }
    const result = await contacts.create(data);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' } || 'some error occured while updating the user.');
  }


};

//Update contact function
const updateContacts = async (req, res) => {
   //#swagger.tags=['Contacts']
  try {
    const id = new ObjectId(req.params.id)
    const data = {
      _id: id,
      ContactsName: req.body.ContactsName,
      ContactsFinish: req.body.lastName,
      email: req.body.email,
      ContactsColor: req.body.favoriteColor,
      
    
      
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
const deleteContacts = async (req, res) => {
   //#swagger.tags=['Contacts']
  try {
    const id = new ObjectId(req.params.id)
    const result = await contacts.deleteOne({ _id: id });
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
  createContacts,
  updateContacts,
  deleteContacts
}