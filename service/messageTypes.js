import buttonTypes from './buttonTypes';

const initButtonType = () => ({
  type: 'buttons',
  buttons: buttonTypes.init,
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

const photo = (url_photo, buttons) => ({
  message: {
    photo: {
      url: url_photo,
      width: 720,
      height: 630,
    },
  },
  keyboard: {
    type: 'buttons',
    buttons,
  },
});

export default {
  initButtonType,
  textMessage,
  urlButtonMessage,
  photoMessage,
  photo,
};
