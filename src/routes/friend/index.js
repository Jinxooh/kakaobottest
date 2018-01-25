import express from 'express';

import checkUserKey from '../../helper/checkUserkey';
import * as friendCtrl from './friend.ctrl';

const friend = express.Router();

friend.post('/', checkUserKey, friendCtrl.join);
friend.delete('/:user_key', checkUserKey, friendCtrl.block);

export default friend;
