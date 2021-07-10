const express = require('express')

const router = express.Router()

const controller = require('../controllers/comment')

const path = 'blog'

router.get(
    `/${path}/:post_id/comment`,
    controller.getData
)

router.post(
    `/${path}/:post_id/comment`,
    controller.postData
)

router.put(
    `/${path}/:id/comment`,
    controller.editData
)

module.exports = router