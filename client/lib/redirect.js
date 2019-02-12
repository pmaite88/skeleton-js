import Router from 'next/router';

export default (context, target) => {
  if (context.res) {
    // Server side
    context.res.writeHead(302, { Location: target });
    context.res.end();
  } else {
    // Client side
    document.location.pathname = target;
  }
};
