import dotenv from 'dotenv';
import Server from './server';

dotenv.config();
const server = new Server();

server.listen(process.env.PORT || 5000);
