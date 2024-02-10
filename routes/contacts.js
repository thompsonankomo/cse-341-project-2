// Create new contact route
router.post('/', contactsController.createBoard);

// Update contacts route
router.put('/:id', contactsController.updateBoard);

// Delete contacts route
router.delete('/:id', contactsController.deleteBoard);

module.exports = router;