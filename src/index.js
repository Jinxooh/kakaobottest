import dotenv from 'dotenv';
import Server from './server';
import db from './database';

dotenv.config();
const server = new Server();
db.connect();

// server.listen(process.env.PORT || 5000);
server.httpsListen(process.env.SSL_PORT || 443);
