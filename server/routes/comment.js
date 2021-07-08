const express = require('express')

const router = express.Router()

const controller = require('../controllers/comment')

const path = 'blog/comment'

router.get(
    `/${path}`,
    controller.getData
)

router.post(
    `/${path}`,
    controller.postData
)

router.put(
    `/${path}/:id`,
    controller.editData
)

module.exports = router