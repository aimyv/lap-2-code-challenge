const express = require('express');
const router = express.Router();
const userController = require('../controllers/users')

router.get('/', userController.index)
router.get('/:name', userController.show)
router.post('/', userController.create)

module.exports = router;
