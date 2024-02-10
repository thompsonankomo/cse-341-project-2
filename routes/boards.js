const express = require('express');
const router = require('express').Router();
const boardsController = require('../controller/boards');

// Get all boards route//
router.get('/', boardsController.getAll);

// Get single board route
router.get('/:id', boardsController.getSingle);

// Create new boards route
router.post('/', boardsController.createBoard);

// Update boards route
router.put('/:id', boardsController.updateBoard);

// Delete boards route
router.delete('/:id', boardsController.deleteBoard);

module.exports = router;