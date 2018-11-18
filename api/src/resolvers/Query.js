import { User } from '../entity/User';

const OPTIONS = ['🍕', '🌭', '🍔', '🥗', '🍣'];

const Query = {
  question: () => {
    const answer = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

    return `Tonight we eat ${answer}`;
  },

  user: async (parent, args, { db }) => {
    const users = await User.find();

    console.log(users);

    return users;
  }
};

export default Query;
