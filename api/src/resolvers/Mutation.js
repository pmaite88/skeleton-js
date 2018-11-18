import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User } from '../entity/User';

const Mutations = {
  async signup(parent, args, { db }) {
    args.email = args.email.toLowerCase();

    const password = await bcrypt.hash(args.password, 10);

    const user = new User();
    user.firstName = args.firstName;
    user.lastName = args.lastName;
    user.email = args.email;
    user.password = password;

    await user.save();

    // // create the JWT token
    // const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // // We set the JWT as a cookie on the response
    // ctx.response.cookie('token', token, {
    //   httpOnly: true,
    //   maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
    // });

    // Return the user to the browser
    return user;
  }
};

export default Mutations;
