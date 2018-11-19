import { User } from '../entity/User';

const OPTIONS = ['🍕', '🌭', '🍔', '🥗', '🍣'];

const Query = {
  question: () => {
    const answer = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

    return `Tonight we eat ${answer}`;
  },

  me: async (_parent, _args, ctx) => {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return await User.findOne({ id: ctx.request.userId });
  },

  user: async (_parent, { email }) => {
    const user = await User.findOne({ email });

    return user;
  }
};

export default Query;
