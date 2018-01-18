import express from 'express';

import message from '../service/messages';

const router = express.Router();

router.get('/', async (req, res) => {
  res.json(message.buttonType());
});

export default router;
