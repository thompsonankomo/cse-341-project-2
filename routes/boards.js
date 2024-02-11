const express = require('express');
const router = require('express').Router();
const BoardsController = require('../controller/boards');
const {isAuthenticated} = require('../middleware/authenticate');


// Get all boards route//
router.get('/', BoardsController.getAllBoards);

// Get single board route
router.get('/:id', BoardsController.getBoard);

// Create new boards route
router.post('/',isAuthenticated, BoardsController.postBoard);

// Update boards route
router.put('/:id', isAuthenticated , BoardsControllerr.updateBoard);

// Delete boards route
router.delete('/:id',isAuthenticated, BoardsController.deleteBoard);

module.exports = router;