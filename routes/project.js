const { Router } = require('express');
const router = Router();
const todoRoutes = require('./todo');

router.post('/', function (req, res) {

});

router.get('/', function (req, res) {

});

router.patch('/:projectId', function (req, res) {

});

router.delete('/:projectId', function (req, res) {

});

router.use('/:projectId/todo', todoRoutes);

module.exports = router;
