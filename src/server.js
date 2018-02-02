import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import http from 'http';
import https from 'https';

import fs from 'fs';
// import lex from 'lib/lex';
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

  httpListen(port) {
    const { app } = this;
    http.createServer(
      app,
      // lex.middleware(require('redirect-https')(app)),
    ).listen(
      port,
      () => console.log('The HTTP server is running on port ', port)
    );
  }

  httpsListen(port) {
    const { app } = this;
    // https.createServer(
    //   lex.httpsOptions,
    //   lex.middleware(app),
    // ).listen(
    //   port,
    //   () => console.log('The HTTPS server is running on port ', port),
    // );
    const rootDir = '/etc/letsencrypt/live/jadoochat.standard.kr';
    const options = {
      key: fs.readFileSync(`${rootDir}/privkey.pem`),
      cert: fs.readFileSync(`${rootDir}/cert.pem`),
    };

    https.createServer(options, app).listen(port, () => console.log('Https server listening on port ', port));
  }
}
