const express = require('express');
const router = require('express').Router();
const boardsController = require('../controller/boards');

// Get all boards route
router.get('/', boardsController.getAll);

// Get sigle contact route
router.get('/:id', boardsController.getSingle);

// Create new contact route
router.post('/', boardsController.createContact);

// Update boards route
router.put('/:id', boardsController.updateContact);

// Delete baords route
router.delete('/:id', boardsController.deleteContact);

module.exports = router;