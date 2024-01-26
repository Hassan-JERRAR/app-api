const express = require('express');
const router = express.Router();
const articleRouter = require('./article.route');

// on définit la route pour récupérer tous les articles avec le controller
router.use('/articles', articleRouter);

module.exports = router;