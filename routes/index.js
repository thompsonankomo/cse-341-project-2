const router = require('express').Router();
const boards = require('./boards');
const swagger = require('./swagger');

// Main router middle ware, index route//
router.get('/', (req, res) => {
    //#swagger.tags=['Welcome Message']
    res.send( "<center><h1 style='color:Green; padding-top: 10rem; font-size:4rem'>Welcome to my CSE341 Boards API page</h1></center>");
})

router.use('/', require('./swagger'));

router.use('/boards', require('./boards'));

module.exports = router;