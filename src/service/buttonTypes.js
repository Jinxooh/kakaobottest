export const STAR_SELECT = '별자리 알아보기✨';
export const INIT = 'INIT';
export const STAR = 'STAR';
export const TAROT = 'TAROT';
export const MODE_NORMAL = 'MODE_NORMAL';
export const MODE_DATE_INPUT = 'MODE_DATE_INPUT';
export const MODE_RESULT = 'MODE_RESULT';
export const NO_THANKS = 'NO_THANKS';

const selectTest = [STAR_SELECT, '타로'];
const init = ['자두야 놀자!'];

const starTest = {
  init,
  start: STAR_SELECT,
  retryDate: '다시입력해주세요',
  sorry: '미안합니다. 처음부터 다시하세요',
  end: 'adios ~~',
  letsgoJadoo: 'jadoo gogo',
  process: [
    {
      question: '안녕하세요?\n저는 당신의 감정을 연구하는 감정케어 상담봇 자두에요.\n자두가 "2018년 운세"를 준비했는데, 한번 해볼래요?',
      answer: ['좋아', '싫어'],
      messageType: 'onlyMessage',
    },
    {
      question: '2018년 별자리 운세는 본인의 생년월일을 입력해주시면 됩니다.\n생년월일을 말씀해 주시겠어요?\n예시) 1991년05월19일 또는 1991/05/19 로 적어주세요.',
      mode: MODE_DATE_INPUT,
      messageType: 'onlyMessage',
    },
    {
      question: 'userResult 결과가 나왔어!',
      answer: ['가즈아'],
      mode: MODE_RESULT,
      messageType: 'onlyMessage',
    },
  ],
  result: [
    [
      {
        result: `당신은 ( 별.자.리.이.름 ) 입니다.\n물병자리의 2018년 키워드는 #성공 입니다. \n그동안 자신의 능력을 알아주지 않는것 같아 속상하셨죠?\n그동안 고생이 많으셨어요.\n이제는 당신의 재능이 사회에서 인정받는 때가 된 것 같아요.\n 아마도 생활에 있어서 '큰 폭'의 전진이 있을 것 같아요.\n내 안의 감춰져 있던 열정을 조금더 발휘해 보세요.n자신의 능력이 폭발하는 것을 경험하게 될 거예요.\n(퐈이어~ 오 에오에오 불타오르네!)`,
        answer: ['연애운도 보여줘', NO_THANKS],
        messageType: 'onlyMessage',
      },
      {
        result: 'userResult 결과가 나왔어!!!!!',
        answer: ['그냥 운도 보여줘', NO_THANKS],
        messageType: 'onlyMessage',
      },
      {
        result: 'userResult 결과가 나왔어!',
        answer: ['자두앱가기', NO_THANKS],
        mode: MODE_NORMAL,
        messageType: 'onlyMessage',
      },
    ],
    [
      {
        result: `당신은 ( 별.자.리.이.름 ) 입니다.\n물병자리의 2018년 키워드는 #성공 입니다. \n그동안 자신의 능력을 알아주지 않는것 같아 속상하셨죠?\n그동안 고생이 많으셨어요.\n이제는 당신의 재능이 사회에서 인정받는 때가 된 것 같아요.\n 아마도 생활에 있어서 '큰 폭'의 전진이 있을 것 같아요.\n내 안의 감춰져 있던 열정을 조금더 발휘해 보세요.n자신의 능력이 폭발하는 것을 경험하게 될 거예요.\n(퐈이어~ 오 에오에오 불타오르네!)`,
        answer: ['가즈아', NO_THANKS],
        messageType: 'onlyMessage',
      },
      {
        result: 'userResult 결과가 나왔어!',
        answer: ['그냥 운도 보여줘', NO_THANKS],
        messageType: 'onlyMessage',
      },
      {
        result: 'userResult 결과가 나왔어!',
        answer: ['자두앱가기', NO_THANKS],
        mode: MODE_NORMAL,
        messageType: 'onlyMessage',
      },
    ],
  ],
};

export default {
  init,
  selectTest,
  starTest,
};
