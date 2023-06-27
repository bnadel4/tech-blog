const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const blogPostRoutes = require('./blogPostRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/blogPosts', blogPostRoutes);

module.exports = router;


