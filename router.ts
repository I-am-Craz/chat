import express from 'express';
const router = express.Router();

const chatController = require('./controllers/chat_controller');

router.get('/', (req, resp) => chatController.getJoinPage(req, resp));

router.get('/chat', (req, resp) => chatController.getChatPage(req, resp));

router.post('/chat', (req, resp) => chatController.getAllMessages(req, resp));

router.get('/message', (req, resp) => chatController.getChatPage(req, resp));

router.post('/message', (req, resp) => chatController.addMessage(req, resp));

export = router;