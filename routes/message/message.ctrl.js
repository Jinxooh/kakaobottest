import messageTypes from '../../service/messageTypes';
import buttonTypes from '../../service/buttonTypes';


const service = (obj, callback) => {
  const {
    user_key,
    // type,
    content,
  } = obj;
  // check user key

  // check return

  // false => save => init
  // true  => check state => play

  switch (content) {
    case buttonTypes.init[0]:
      callback(messageTypes.textMessage(buttonTypes.init[0], buttonTypes.selectTest));
      break;
    case buttonTypes.selectTest[0]:
      callback(messageTypes.textMessage('별자리 선택1'));
      break;
    case buttonTypes.selectTest[1]:
      callback(messageTypes.textMessage('타로 선택', buttonTypes.init));
      break;
    default:
      console.log('default');
      callback(messageTypes.textMessage('Default', buttonTypes.init));
      break;
  }
};

export const getMessage = (req, res) => {
  const obj = {
    user_key: req.body.user_key,
    type: req.body.type,
    content: req.body.content,
  };

  service(obj, (result) => {
    console.log(result);
    res.json(result);
  });
};
