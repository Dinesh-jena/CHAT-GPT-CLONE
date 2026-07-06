const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const chatController = require('../controller/chat.controller')



/* POST /api/chat */
router.post('/',authMiddleware.authUser, chatController.createChat );

/* GET /api/chats */

router.get('/',authMiddleware.authUser,chatController.getChats);

/* GET /api/chat/messages/:id */
router.get('/messages/:id',authMiddleware.authUser,chatController.getMessages);

module.exports=router;