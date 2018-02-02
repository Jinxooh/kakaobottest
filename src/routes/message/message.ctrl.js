import messageTypes from 'service/messageTypes';
import buttonTypes, {
  STAR_SELECT,
  INIT,
  STAR,
  TAROT,
  MODE_NORMAL,
} from 'service/buttonTypes';
import User from 'database/models/User';
import log from 'lib/log';
import star from 'service/starService';

const service = async (obj, callback) => {
  const {
    user_key,
    // type,
    content,
  } = obj;

  let user = await User.findUserKey(user_key);
  if (!user) user = await User.registerUserKey(user_key);
  const { stateName: userState } = user;

  // select init or call init
  if (content === buttonTypes.init[0] || content === 'a' || content === '시작') {
    await user.updateState(INIT);
    await user.updateMode(MODE_NORMAL);
    callback(messageTypes.textMessage(buttonTypes.init[0], buttonTypes.selectTest));
    return;
  }
  // check user key

  // await user.updateState(STAR);
  if (userState === INIT) {
    console.log('content', content);
    switch (content) {
      case buttonTypes.selectTest[0]:
        await user.updateState(STAR);
        // callback(messageTypes.textMessage(STAR_SELECT, buttonTypes.init));
        star.service(user, content, callback);
        break;
      case buttonTypes.selectTest[1]:
        await user.updateState(TAROT);
        callback(messageTypes.textMessage('타로 선택', buttonTypes.init));
        break;
      default:
        console.log('default');
        callback(messageTypes.textMessage('Default', buttonTypes.init));
        break;
    }
  } else {
    if (userState === STAR) {
      log.info('user selected Star test');
      star.service(user, content, callback);
      return;
      // callback(messageTypes.textMessage('Default', buttonTypes.init));
    }

    if (userState === TAROT) {
      log.info('user selected TAROT test');
      callback(messageTypes.textMessage('Default', buttonTypes.init));
      return;
    }
    log.info('user select something else', userState);
  }
};

export const getMessage = (req, res) => {
  const obj = {
    user_key: req.body.user_key,
    type: req.body.type,
    content: req.body.content,
  };

  service(obj, (result) => {
    // console.log(result);
    res.json(result);
  });
};
