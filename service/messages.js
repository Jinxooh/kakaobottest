import buttonTypes from './buttonTypes';

const buttonType = () => ({
  type: 'buttons',
  buttons: buttonTypes.initButtons,
});

const textMessage = (text, buttons = false) => ({
  message: {
    text,
  },
  keyboard: {
    type: buttons ? 'buttons' : 'text',
    buttons: buttons || null,
  },
});

const urlButtonMessage = (text, label, url_button) => ({
  message: {
    text,
    message_button: {
      label,
      url: url_button,
    },
  },
});

const photoMessage = (text, url_photo, buttons) => ({
  message: {
    text,
    photo: {
      url: url_photo,
      width: 640,
      height: 480,
    },
  },
  keyboard: {
    type: 'buttons',
    buttons,
  },
});

export default {
  buttonType,
  textMessage,
  urlButtonMessage,
  photoMessage,
};
