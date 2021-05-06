const { Router } = require('express');
const router = Router();
const authRoutes = require('./auth');
const projectRoutes = require('./project');


router.use('/auth', authRoutes);
router.use('/project', projectRoutes);

module.exports = router;
