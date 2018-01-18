import express from 'express';

import message from '../service/messages';
import checkUserKey from '../helper/checkUserkey';

const router = express.Router();

router.post('/', checkUserKey, (req, res) => {
  const obj = {
    user_key: req.body.user_key,
    type: req.body.type,
    content: req.body.content,
  };

  console.log(obj);
  switch (obj.content) {
    case message.buttons[0]:
      res.json(message.buttonType2(message.buttons[0], '1', 'http://www.naver.com'));
      break;
    case message.buttons[1]:
      res.json(message.buttonType3(message.buttons[1], '2', 'http://www.naver.com'));
      break;
    case message.buttons[2]:
      res.json(message.buttonType4(message.buttons[2], '3', 'http://www.naver.com'));
      break;
    case message.buttons[3]:
      res.json(message.buttonType4(message.buttons[2], '4', 'http://www.naver.com'));
      break;
    default:
      console.log('default');
      break;
  }
});

export default router;
