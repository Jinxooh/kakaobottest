import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.set('port', process.env.PORT || 7000);

app.listen(app.get('port'), () => console.log('the server is ruunning on ', app.get('port')));
