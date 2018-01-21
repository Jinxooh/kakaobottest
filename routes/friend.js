import express from 'express';

import checkUserKey from '../helper/checkUserkey';
import messageTypes from '../service/messageTypes';

const router = express.Router();

router.post('/', checkUserKey, (req, res) => {
  const { user_key } = req.body;
  console.log(`${user_key} is joined chatting room.`);

  // res.json({ success: true });
  res.json(messageTypes.initButtonType());
});

router.delete('/:user_key', checkUserKey, (req, res) => {
  const { user_key } = req.params;
  console.log(`${user_key} is blocked chatting room.`);

  res.json({ success: true });
});

export default router;
