const { Router } = require('express');
const authController = require('../controllers/authController');
const router = Router();

router.post('/register', authController.createUser);

router.post('/login', function (req, res) {
  // login flow
});

module.exports = router;
