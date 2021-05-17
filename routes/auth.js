const { Router } = require('express');
const authController = require('../controllers/authController');
const authValidator = require('../middlewares/validators/authValidator');
const router = Router();

router.post('/register', authValidator.register, authController.createUser);
router.post('/login', authValidator.login, authController.login);
// router.post('/logout', authValidator.logout, authController.logout);

module.exports = router;
