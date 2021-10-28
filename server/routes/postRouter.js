const express = require("express");
const router = express.Router();
const postController = require('../Controllers/postController')

router.post('/post', postController.postController)

module.exports = router;
