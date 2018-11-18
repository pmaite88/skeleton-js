import { User } from '../entity/User';

const OPTIONS = ['🍕', '🌭', '🍔', '🥗', '🍣'];

const Query = {
  question: () => {
    const answer = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

    return `Tonight we eat ${answer}`;
  },

  me: async (parent, args, { db }) => {
    const user = await User.findOne();

    return user;
  },

  user: async (parent, args, { db }) => {
    const user = await User.findOne({ email: args.email });

    return user;
  }
};

export default Query;
