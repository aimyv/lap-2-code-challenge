const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts')

router.get('/', postController.index)
router.get('/:name', postController.findByName)
router.post('/', postController.create)

module.exports = router;
