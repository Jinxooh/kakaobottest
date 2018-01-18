const checkUserKey = (req, res, next) => {
  const user_key = req.method === 'POST' ? req.body.user_key : req.params.user_key;
  if (user_key !== undefined) {
    next();
  } else {
    res.status(500).json({ error: `user_key is ${req.params.user_key}` });
  }
};

export default checkUserKey;
