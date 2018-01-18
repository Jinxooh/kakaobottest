import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';

import routes from './routes';

dotenv.config();
const app = express();

app.set('port', process.env.PORT || 5000);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/', routes);
// app.use((err, req, res) => {
//   console.log(err);
// });

app.listen(app.get('port'), () => console.log('the server is ruunning on ', app.get('port')));
