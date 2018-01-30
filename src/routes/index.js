import express from 'express';

import test from './test';
import keyboard from './keyboard';
import message from './message';
import friend from './friend';
import chatRoom from './chatRoom';
import insertDB from './insertDB';

const router = express.Router();

router.use('/test', test);
router.use('/keyboard', keyboard);
router.use('/message', message);
router.use('/friend', friend);
router.use('/chat_room', chatRoom);
router.use('/insertDB', insertDB);

export default router;
