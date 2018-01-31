import Star from 'database/models/Star';
import messageTypes from 'service/messageTypes';

const MESSAGE = 'onlyMessage';
const URL_BTN = 'urlButton';
const PHOTO = 'photo';

const messageType = (type) => {
  const { startId, question, answer, msgType, urlPhoto, urlButton } = type;

  if (msgType === MESSAGE) {
    return messageTypes.textMessage(question, answer || null);
  }
  // if (msgType === URL_BTN) {
  //   return messageTypes.urlButtonMessage;
  // }
  // if (msgType === PHOTO) {
  //   return messageTypes.photoMessage;
  // }
  return messageTypes.textMessage;
};

const star = (() => {
  return {
    service: async (user, content, callback) => {
      console.log('content, ', content);
      // console.log('callback, ', callback);
      const { step } = user;
      const star = await Star.findStarId(step);
      // const { startId, question, answer, msgType } = star;
      // console.log(user);
      // console.log(star);
      // console.log(messageType(msgType));
      callback(messageType(star));
    },
  };
})();

export default star;
