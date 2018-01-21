import express from 'express';

import checkUserKey from '../helper/checkUserkey';
import messageTypes from '../service/messageTypes';
import buttonTypes from '../service/buttonTypes';
import messages from '../service/messages';

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
      res.json(messageTypes.textMessage(messages.comments[0], buttonTypes.steps[0]));
      break;
    case buttonTypes.steps[0][0]:
      res.json(messageTypes.textMessage(messages.comments[1], buttonTypes.steps[1]));
      break;
    case buttonTypes.steps[1][0]:
      res.json(messageTypes.textMessage(messages.comments[2], buttonTypes.steps[2]));
      break;
    case buttonTypes.steps[1][1]:
      res.json(messageTypes.textMessage(messages.comments[3], buttonTypes.steps[2]));
      break;
    case buttonTypes.steps[2][0]:
      res.json(messageTypes.textMessage(messages.comments[4], buttonTypes.steps[3]));
      break;
    case buttonTypes.steps[2][1]:
      res.json(messageTypes.textMessage(messages.comments[4], buttonTypes.steps[3]));
      break;
    case buttonTypes.steps[3][0]:
      res.json(messageTypes.textMessage(messages.comments[5], buttonTypes.steps[4]));
      break;
    case buttonTypes.steps[4][0]:
      res.json(messageTypes.textMessage(messages.comments[6], buttonTypes.steps[5]));
      break;
    case buttonTypes.steps[4][1]:
      res.json(messageTypes.textMessage(messages.comments[6], buttonTypes.steps[5]));
      break;
    case buttonTypes.steps[5][0]:
      res.json(messageTypes.textMessage(messages.comments[7], buttonTypes.steps[6]));
      break;
    case buttonTypes.steps[6][0]:
      res.json(messageTypes.textMessage(messages.comments[8], buttonTypes.steps[7]));
      break;
    case buttonTypes.steps[7][0]:
      res.json(messageTypes.textMessage(messages.comments[9], buttonTypes.steps[8]));
      break;
    case buttonTypes.steps[8][0]:
      res.json(messageTypes.textMessage(messages.comments[10], buttonTypes.steps[9]));
      break;
    case buttonTypes.steps[9][0]:
      res.json(messageTypes.textMessage(messages.comments[11], buttonTypes.steps[10]));
      break;
    case buttonTypes.steps[10][0]:
      res.json(messageTypes.photo('https://dc2729d5.ngrok.io/images/1.png', buttonTypes.steps[11]));
      break;
    case buttonTypes.steps[10][1]:
      res.json(messageTypes.photo('https://dc2729d5.ngrok.io/images/1.png', buttonTypes.steps[11]));
      break;
    case buttonTypes.steps[11][0]:
      res.json(messageTypes.photo('https://dc2729d5.ngrok.io/images/2.png', buttonTypes.steps[12]));
      break;
    case buttonTypes.steps[12][0]:
      res.json(messageTypes.textMessage(messages.comments[12], buttonTypes.steps[13]));
      break;
    case buttonTypes.steps[13][0]:
    case buttonTypes.steps[13][1]:
    case buttonTypes.steps[13][2]:
    case buttonTypes.steps[13][3]:
    case buttonTypes.steps[13][4]:
    case buttonTypes.steps[13][5]:
    case buttonTypes.steps[13][6]:
    case buttonTypes.steps[13][7]:
    case buttonTypes.steps[13][8]:
    case buttonTypes.steps[13][9]:
    case buttonTypes.steps[13][10]:
      res.json(messageTypes.textMessage(messages.comments[13], buttonTypes.steps[14]));
      break;
    case buttonTypes.steps[13][11]:
      res.json(messageTypes.photo('https://dc2729d5.ngrok.io/images/3.png', buttonTypes.steps[14]));
      break;
    case buttonTypes.steps[14][0]:
      res.json(messageTypes.textMessage(messages.comments[14], buttonTypes.steps[15]));
      break;
    case buttonTypes.steps[15][0]:
      res.json(messageTypes.textMessage('따단~ 선물 증정식!', buttonTypes.init));
      break;
    default:
      console.log('default');
      res.json(messageTypes.textMessage(messages.comments[0], buttonTypes.steps[0]));
      break;
  }
});

export default router;
