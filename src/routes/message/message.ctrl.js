import messageTypes from 'service/messageTypes';
import buttonTypes from 'service/buttonTypes';
import User from 'database/models/User';

const service = (obj, callback) => {
  const {
    user_key,
    // type,
    content,
  } = obj;

  // select init or call init
  if (content === buttonTypes.init[0]) {
    callback(messageTypes.textMessage(buttonTypes.init[0], buttonTypes.selectTest));
    return;
  }
  // check user key

  // check return

  // false => save => init
  // true  => check state => play
  if (!userSelected) {
    switch (content) {
      case buttonTypes.selectTest[0]:
        callback(messageTypes.textMessage('별자리 선택1', buttonTypes.init));
        break;
      case buttonTypes.selectTest[1]:
        callback(messageTypes.textMessage('타로 선택', buttonTypes.init));
        break;
      default:
        console.log('default');
        callback(messageTypes.textMessage('Default', buttonTypes.init));
        break;
    }
  } else {
    console.log('user select something');
    if (userSelected === 'SOMETHING') {

    }
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
