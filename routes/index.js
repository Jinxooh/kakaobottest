import express from 'express';

import test from './test';
import keyboard from './keyboard';
import message from './message';

import checkUserKey from '../helper/checkUserkey';

const router = express.Router();

router.use('/test', test);
router.use('/keyboard', keyboard);
router.use('/message', message);

router.post('/friend', checkUserKey, (req, res) => {
  const { user_key } = req.body;
  console.log(`${user_key}님이 쳇팅방에 참가했습니다.`);

  res.json({ success: true });
});

router.delete('/friend/:user_key', checkUserKey, (req, res) => {
  const { user_key } = req.params;
  console.log(`${user_key}님이 쳇팅방을 차단했습니다.`);

  res.json({ success: true });
});

router.delete('/chat_room/:user_key', checkUserKey, (req, res) => {
  const { user_key } = req.params;
  console.log(`${user_key}님이 쳇팅방에서 나갔습니다.`);
  res.json({ success: true });
});

export default router;
