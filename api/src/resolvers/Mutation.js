import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User } from '../entity/User';

const Mutations = {
  async signin(__, { email, password }, { response }) {
    // 1. Check if there is a user with that email
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }

    // 2. Check if the password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid Password!');
    }

    // 3. generate the JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // 4. Set the cookie with the token
    response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });

    // 5. Return the user
    return user;
  },

  async signup(_parent, args, { response }) {
    args.email = args.email.toLowerCase();

    const password = await bcrypt.hash(args.password, 10);

    let user = new User();
    user.firstName = args.firstName;
    user.lastName = args.lastName;
    user.email = args.email;
    user.password = password;

    user = await user.save();

    // create the JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // We set the JWT as a cookie on the response
    response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
    });

    // Return the user to the browser
    return user;
  },
  signout(_parent, _args, ctx) {
    ctx.response.clearCookie('token');
    return { message: 'Goodbye!' };
  }
};

export default Mutations;
