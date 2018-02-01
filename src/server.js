import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

import http from 'http';
import https from 'https';
import lex from 'lib/greenlock';

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
    console.log('The server is running on port ', port);
  }

  httpListen(port) {
    const { app } = this;
    http.createServer(app).listen(port, () => console.log('The HTTP server is running on port ', port));
  }

  httpsListen(port) {
    const { app } = this;
    // const option = {
    //   key: fs.readFileSync('/etc/letsencrypt/live/jadoochat.standard.kr/privkey.pem'),
    //   cert: fs.readFileSync('/etc/letsencrypt/live/jadoochat.standard.kr/cert.pem'),
    // }
    https.createServer(
      lex.httpsOptions,
      lex.middleware(app),
    ).listen(
      port,
      () => console.log('The HTTPS server is running on port ', port),
    );
  }
}
