import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import createServer from './createServer';

const server = createServer();

dotenv.config({ path: '.env' });

server.express.use(cookieParser());

const cors = {
  credentials: true,
  origin: process.env.FRONTEND_URL
};

server.start({ cors }, ({ port }) => {
  console.log(`Server is now running on http://localhost:${port}`);
});
