import Star from 'database/models/Star';
import log from 'lib/log';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';

import messageTypes from 'service/messageTypes';
import buttonTypes, {
  MODE_NORMAL,
  MODE_RESULT,
  MODE_DATE_INPUT,
  NO_THANKS,
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

const checkDate = date => /^(19|20)\d{2}\/(0[0-9]|1[0-2]|[1-9])\/(0[1-9]|[1-2][0-9]|3[0-1]|[1-9])$/.test(date);

const star = (() => {
  const { starTest } = buttonTypes;
  return {
    service: async (user, userAnswer, callback) => {
      const { step, mode } = user;
      log.info(`mode, ${mode}`);
      if (mode === MODE_DATE_INPUT) {
        if (checkDate(userAnswer)) {
          await user.updateMode(starTest.process[2].mode);
          callback(messageTypes.textMessage(`${starTest.process[2].question} : ${userAnswer}`, starTest.process[2].answer || null));
        } else {
          callback(messageTypes.textMessage(starTest.retryDate));
        }
        return;
      }
      if (mode === MODE_RESULT) {
        if (userAnswer === starTest.process[2].answer[0]) {
          callback(messageTypes.textMessage(starTest.result[0][0].result, starTest.result[0][0].answer));
        }
        if (userAnswer === starTest.result[0][0].answer[0]) {
          callback(messageTypes.textMessage(starTest.result[0][1].result, starTest.result[0][1].answer));
        }
        if (userAnswer === starTest.result[0][1].answer[0]) {
          callback(messageTypes.textMessage(starTest.result[0][2].result, starTest.result[0][2].answer));
        }
        if (userAnswer === starTest.result[0][2].answer[0]) {
          callback(messageTypes.textMessage(starTest.letsgoJadoo, starTest.init));
        }
        if (userAnswer === NO_THANKS) {
          await user.updateMode(MODE_NORMAL);
          callback(messageTypes.textMessage(starTest.end, starTest.init));
        }
        return;
      }
      if (userAnswer === starTest.start) {
        callback(messageTypes.textMessage(
          starTest.process[0].question,
          starTest.process[0].answer || null,
        ));
      }
      if (userAnswer === starTest.process[0].answer[0]) {
        log.info(`mode ${starTest.process[1].mode}`);
        await user.updateMode(starTest.process[1].mode);
        // await user.updateMode(starTest.process[1].mode);
        // if (starTest.process[1].mode) {
        // }
        callback(messageTypes.textMessage(starTest.process[1].question, starTest.process[1].answer || null));
      }
      if (userAnswer === starTest.process[0].answer[1]) {
        callback(messageTypes.textMessage(starTest.sorry, starTest.init));
      }
    },
  };
})();

export default star;
