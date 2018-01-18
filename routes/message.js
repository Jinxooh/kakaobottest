import express from 'express';

import messages from '../service/messages';
import buttonTypes from '../service/buttonTypes';
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
    case buttonTypes.init[0]:
      console.log('1');
      res.json(messages.textMessage(buttonTypes.init[0], buttonTypes.step1));
      break;
    case buttonTypes.init[1]:
      console.log('2');
      res.json(messages.textMessage(buttonTypes.init[1]));
      break;
    case buttonTypes.step1[0]:
      console.log(buttonTypes.step1[0]);
      res.json(messages.textMessage(buttonTypes.step1[0], buttonTypes.init));
      break;
    case buttonTypes.step1[1]:
      console.log(buttonTypes.step1[1]);
      res.json(messages.photoMessage(buttonTypes.step1[1], 'http://intra.standard.kr/images/emp_pic/jeckson.jpg', buttonTypes.init));
      break;
    default:
      console.log('default');
      break;
  }
});

export default router;
