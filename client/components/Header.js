import Router from 'next/router';
import NProgress from 'nprogress';
import User from './User';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <div>
    This is the Header
    <User>
      {({ data: { me } }) => {
        if (me) return <p>{me.firstName}</p>;
        return null;
      }}
    </User>
  </div>
);

export default Header;
