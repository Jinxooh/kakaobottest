import express from 'express';

import test from './test';
import keyboard from './keyboard';
import message from './message';
import friend from './friend';

import checkUserKey from '../helper/checkUserkey';

const router = express.Router();

router.use('/test', test);
router.use('/keyboard', keyboard);
router.use('/message', message);
router.use('/friend', friend);

router.delete('/chat_room/:user_key', checkUserKey, (req, res) => {
  const { user_key } = req.params;
  console.log(`${user_key} leaves chatting room.`);
  res.json({ success: true });
});

export default router;
