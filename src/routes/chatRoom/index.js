import express from 'express';

import checkUserkey from 'helper/checkUserkey';
import * as checkRoomCtrl from './chatRoom.ctrl';

const chatRoom = express.Router();

chatRoom.delete('/:user_key', checkUserkey, checkRoomCtrl.leave);

export default chatRoom;
