import message from '../../service/messageTypes';

export const buttonSetting = (req, res) => {
  res.json(message.buttonType());
};
