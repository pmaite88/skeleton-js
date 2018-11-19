import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import createServer from './createServer';

dotenv.config({ path: '.env' });

const server = createServer();

server.express.use(cookieParser());

// Decode the JWT so we can get the user id on each request
server.express.use((req, _res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // Put the userId onto the req for future requests to access
    req.userId = userId;
  }
  next();
});

const cors = {
  credentials: true,
  origin: process.env.FRONTEND_URL
};

server.start({ cors }, ({ port }) => {
  console.log(`Server is now running on http://localhost:${port}`);
});
