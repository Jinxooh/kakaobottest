import dotenv from 'dotenv';
import Server from './server';
import db from './database';

dotenv.config();
const server = new Server();
db.connect();

if (process.env.APP_ENV === 'local') {
  server.listen(process.env.PORT || 5000);
}
if (process.env.APP_ENV === 'server') {
  // server.httpListen(process.env.PORT_80 || 5001);
  server.httpsListen(process.env.SSL_PORT || 8443);
}

