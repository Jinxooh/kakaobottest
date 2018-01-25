import User from 'model/User';

export const join = (req, res) => {
  const { user_key } = req.body;
  console.log(`${user_key}님이 쳇팅방에 참가했습니다.`);

  // User.checkUserKey(user_key).then(
  //   saveUser);

  res.json({ success: true });
};

export const block = (req, res) => {
  const { user_key } = req.params;
  console.log(`${user_key}님이 쳇팅방을 차단했습니다.`);

  res.json({ success: true });
};
