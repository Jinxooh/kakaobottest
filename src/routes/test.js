import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('test yah, ', req.body);
  res.status(200).json({ success: true });
});

export default router;
