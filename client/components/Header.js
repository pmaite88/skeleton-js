import Router from 'next/router';
import NProgress from 'nprogress';
import User from './User';
import Nav from './Nav';

import styled from 'styled-components';

const Header = styled.header`
  padding: 10px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
`;

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

export default () => (
  <User>
    {({ data: { me } }) => {
      if (me)
        return (
          <Header>
            This is the Header
            <Nav />
            <p>Hello {me.firstName}</p>
          </Header>
        );
      return null;
    }}
  </User>
);
