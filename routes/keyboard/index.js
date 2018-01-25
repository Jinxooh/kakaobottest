import express from 'express';
import * as keyboardCtrl from './keyboard.ctrl';

const keyboard = express.Router();

keyboard.get('/', keyboardCtrl.buttonSetting);

export default keyboard;
