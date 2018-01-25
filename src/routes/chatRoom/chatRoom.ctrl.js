export const leave = (req, res) => {
  const { user_key } = req.params;
  console.log(`${user_key}님이 쳇팅방에서 나갔습니다.`);
  res.json({ success: true });
};
