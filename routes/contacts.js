// Create new contact route//
router.post('/', isAuthenticated ,getContactsController.createBoard);

// Update contacts route//
router.put('/:id',isAuthenticated ,getContactsController.updateBoard);

// Delete contacts route//
router.delete('/:id', isAuthenticated, getContactsController.deleteBoard);

module.exports = router;