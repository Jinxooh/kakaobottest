import express from 'express';

import messages from '../service/messages';

const router = express.Router();

router.get('/', async (req, res) => {
  res.json(messages.buttonType());
});

export default router;
