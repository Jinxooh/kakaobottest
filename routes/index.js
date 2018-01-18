import express from 'express';
import test from './test';
import keyboard from './keyboard';

const router = express.Router();

router.use('/test', test);
router.use('/keyboard', keyboard);

export default router;
