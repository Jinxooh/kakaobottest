import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import routes from './routes';

export default class Server {
  constructor() {
    this.app = express();
    this.middleware();
  }

  middleware() {
    const { app } = this;
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true,
    }));

    app.use('/', routes);
  }

  listen(port) {
    const { app } = this;
    app.listen(port);
    console.log('The server is running on port ', port);
  }
}
