import express from 'express';
import checkUserkey from '../../helper/checkUserkey';
import * as messageCtrl from './message.ctrl';

const message = express.Router();

message.post('/', checkUserkey, messageCtrl.getMessage);

export default message;
