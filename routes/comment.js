const express = require('express')

const router = express.Router()

const controller = require('../controllers/comment')

const path = 'blog'

router.get(
    `/${path}/comment`,
    controller.getData
)

router.post(
    `/${path}/comment`,
    controller.postData
)

router.put(
    `/${path}/comment`,
    controller.editData
)


module.exports = router