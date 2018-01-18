const buttons = ['교내식단', 'BTL식단', '하교광주권', '하교목포권', '기능추가요청'];
const steps = ['1', '2', '3', '4', '5'];

const buttonType = () => ({
  type: 'buttons',
  buttons,
});

const buttonType2 = (text, label, url_button) => ({
  message: {
    text,
    message_button: {
      label,
      url: url_button,
    },
  },
  keyboard: {
    type: 'buttons',
    buttons,
  },
});

const buttonType3 = (text, label, url_button) => ({
  message: {
    text,
    message_button: {
      label,
      url: url_button,
    },
  },
});

const buttonType4 = (text, label, url_button) => ({
  message: {
    text,
    message_button: {
      label,
      url: url_button,
    },
  },
  keyboard: {
    type: 'buttons',
    buttons: steps,
  },
});

export default {
  buttons,
  buttonType,
  buttonType2,
  buttonType3,
  buttonType4,
};
