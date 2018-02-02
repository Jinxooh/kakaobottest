import Star from 'database/models/Star';
import log from 'lib/log';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';

import messageTypes from 'service/messageTypes';
import buttonTypes, {
  STAR_SELECT,
  MODE_DATE,
  MODE_NORMAL,
  MODE_INPUT,
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
      const currentStar = await Star.findStarId(step);
      if (!currentStar) {
        log.info('currentStar is null ', currentStar);
        user.updateStep(0);
        callback(messageTypes.textMessage('처음으로 돌아간다아아앗', buttonTypes.selectTest));
        return;
      }
      // console.log(currentStar);
      const { startId, question, answer, msgType, urlPhoto, urlButton, prevAnswer } = currentStar;
      console.log('answer, ', answer);
      console.log('prevAnswer, ', prevAnswer);
      console.log('question, ', question);
      console.log('msgType, ', msgType);
      const convertedQuestion = question.replace(/\\n/g, '\n');
      log.info('step : ' + step);
      // await user.updateStep(0);
      // await user.updateMode(MODE_NORMAL);
      if (mode === MODE_INPUT) {
        const date = moment(content, 'YYYY/MM/DD').isValid();
        console.log(date);
        if (date) {
          const updatedUser = await user.updateMode(MODE_NORMAL);
          if (updatedUser.ok) {
            console.log('okok');
            await user.updateStep(step + 1);
            callback(messageTypes.textMessage(`${convertedQuestion} : ${content}`, answer));
          } else {
            console.log('failure');
            await user.updateStep(0);
            callback(messageTypes.textMessage(`문제 발생했어요! 다시 시작해주세요`, buttonTypes.selectTest));
          }
          return;
        }
        callback(messageTypes.textMessage('날짜 제대로 입력'));
        return;
      }

      if (mode === MODE_NORMAL) {
        await user.updateStep(step + 1);
        if (content === STAR_SELECT) {
          callback(messageTypes.textMessage(convertedQuestion, answer));
          return;
        }

        if (isEmpty(answer)) {
          if (content === prevAnswer[1]) {
            await user.updateStep(0);
            await user.updateMode(MODE_NORMAL);
            callback(messageTypes.textMessage('부정누름1', buttonTypes.selectTest));
            return;
          }
          await user.updateMode(MODE_INPUT);
          callback(messageTypes.textMessage(convertedQuestion));
          return;
        }

        if (isEmpty(prevAnswer)) {
          callback(messageTypes.textMessage(convertedQuestion, answer));
        } else {
          if (content === prevAnswer[0]) {
            callback(messageTypes.textMessage(convertedQuestion, answer));
            return;
          }
          if (content === prevAnswer[1]) {
            await user.updateStep(0);
            await user.updateMode(MODE_NORMAL);
            callback(messageTypes.textMessage('부정누름2', buttonTypes.selectTest));
            return;
          }
        }
        await user.updateStep(0);
        callback(messageTypes.textMessage('아무것도 아닌것', buttonTypes.selectTest));
      }
    },
  };
})();

export default star;
