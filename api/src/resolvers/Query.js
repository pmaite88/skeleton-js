const OPTIONS = ['🍕', '🌭', '🍔', '🥗', '🍣'];

const Query = {
  question: () => {
    const answer = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

    return `Tonight we eat ${answer}`;
  }
};

export default Query;
