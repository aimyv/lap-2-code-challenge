const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts')

router.get('/', postController.index)
router.get('/:pseudonym', postController.findByName)
router.post('/', postController.create)

module.exports = router;
