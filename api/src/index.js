import dotenv from 'dotenv';
import createServer from './createServer';

const server = createServer();

dotenv.config({ path: '.env' });

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  ({ port }) => {
    console.log(`Server is now running on http://localhost:${port}`);
  }
);
