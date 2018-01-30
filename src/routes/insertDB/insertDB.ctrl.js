import Star from 'database/models/Star';

export const insert = async (req, res) => {
  const { body } = req;
  console.log(body);
  const star = await Star.findStarId(body.starId);
  if (!star) Star.insertData(body);

  res.json({ success: body });
};
