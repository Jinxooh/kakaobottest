import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

import http from 'http';
import https from 'https';

import routes from './routes';

const httpPort = 80;
const httpsPort = 443;

export default class Server {
  constructor() {
    this.app = express();
    this.middleware();
  }

  middleware() {
    const { app } = this;
    // app.use(express.static('public'));
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
    const file = fs.readFileSync(path.join('/Users/hwangjinsoo-pc/Documents/MyWorks/yarn.lock'));
    console.log(file);
    console.log('The server is running on port ', port);
  }

  httpListen(port) {
    const { app } = this;
    http.createServer(app).listen(port, () => console.log('The HTTP server is running on port ', port));
  }

  httpsListen(port) {
    const { app } = this;
    https.createServer(app).listen(port, () => console.log('The HTTP server is running on port ', port));
  }
}
