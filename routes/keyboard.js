import express from 'express';

import messageTypes from '../service/messageTypes';

const router = express.Router();

router.get('/', async (req, res) => {
  res.json(messageTypes.initButtonType());
});

export default router;
