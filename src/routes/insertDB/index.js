import express from 'express';

import * as insertDBCtrl from './insertDB.ctrl';

const insertDB = express.Router();

insertDB.post('/', insertDBCtrl.insert);

export default insertDB;
