const buttons = ['교내식단', 'BTL식단', '하교광주권', '하교목포권', '기능추가요청'];

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

export default {
  buttons,
  buttonType,
  buttonType2,
};
