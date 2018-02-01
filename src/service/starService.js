import Star from 'database/models/Star';
import log from 'lib/log';
import moment from 'moment';

import messageTypes from 'service/messageTypes';
import buttonTypes, {
  STAR_SELECT,
  MODE_DATE,
  MODE_NORMAL,
} from 'service/buttonTypes';

const MESSAGE = 'onlyMessage';
const URL_BTN = 'urlButton';
const PHOTO = 'photo';

const messageType = (type) => {
  const { startId, question, answer, msgType, urlPhoto, urlButton } = type;

  const convertedMsg = question.replace(/\\n/g, '\n');
  if (msgType === MESSAGE) {
    return messageTypes.textMessage(convertedMsg, answer || null);
  }
  // if (msgType === URL_BTN) {
  //   return messageTypes.urlButtonMessage;
  // }
  // if (msgType === PHOTO) {
  //   return messageTypes.photoMessage;
  // }
  return messageTypes.textMessage;
};

const checkDate = (date) => {
  return /^(19|20)\d{2}\/(0[0-9]|1[0-2]|[1-9])\/(0[1-9]|[1-2][0-9]|3[0-1]|[1-9])$/.test(date);
};

const star = (() => {
  return {
    service: async (user, content, callback) => {
      const { step, mode } = user;
      await user.updateMode(MODE_NORMAL);
      if (mode === MODE_DATE) {
        const date = moment(content, 'YYYY/MM/DD').isValid();
        console.log(date);
        if (date) {
          const updatedUser = await user.updateMode(MODE_NORMAL);
          if (updatedUser.ok) {
            console.log('okok');
          } else {
            console.log('failure');
          }
          callback(messageTypes.textMessage(`날짜 : ${content}`, buttonTypes.selectTest));
          return;
        }
        callback(messageTypes.textMessage('날짜 제대로 입력'));
        return;
      }

      if (mode === MODE_NORMAL) {
        if (content === buttonTypes.selectTest[0]) {
          callback(messageTypes.textMessage('날짜 입력'));
          return;
        }
        callback(messageTypes.textMessage('시작해 볼까요오옷?', buttonTypes.selectTest));
      }
      return;

      console.log('content, ', content);
      console.log(user);
      const currentStar = await Star.findStarId(step);
      if (!currentStar) {
        log.info('currentStar is null ', currentStar);
        user.updateStep(0);
        callback(messageTypes.textMessage(buttonTypes.init[0], buttonTypes.selectTest));
        return;
      }

      if (content === STAR_SELECT) {
        user.updateStep(step + 1);
        callback(messageType(currentStar));
      } else {
        const prevStar = await Star.findStarId(step - 1);
        const { answer: prevAnswer } = prevStar;
        if (content === prevAnswer[0]) {
          user.updateStep(step + 1);
          callback(messageType(currentStar));
          return;
        }
        if (content === prevAnswer[1]) {
          user.updateStep(0);
          callback(messageTypes.textMessage(buttonTypes.init[0], buttonTypes.selectTest));
          return;
        }
        user.updateStep(0);
        callback(messageTypes.textMessage(buttonTypes.init[0], buttonTypes.selectTest));
      }
    },
  };
})();

export default star;
