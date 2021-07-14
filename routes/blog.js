const express = require('express')

const router = express.Router()

const controller = require('../controllers/blog')

const path = 'blog'

router.get(
    `/${path}`,
    controller.getData
)
router.post(
    `/${path}`,
    controller.postData
)
router.get(
    `/${path}/:id`,
    controller.getDataByID
)
router.post(
    `/${path}/:id/comments`,
    controller.postComment
)
router.get(
    `/${path}/:id/comments`,
    controller.getComment
)
router.delete(
    `/${path}/comment/:id`,
    controller.deleteComment
)

module.exports = router