import Link from 'next/link';
import { Mutation } from 'react-apollo';
import User from './User';
import Signout from './Signout';

export default () => (
  <User>
    {({ data: { me } }) => (
      <div>
        {me && (
          <>
            <Link href="/profile">
              <a>Account</a>
            </Link>
            <Link href="/secondPage">
              <a>SecondPage</a>
            </Link>
            <Link href="/thirdPage">
              <a>ThirdPage</a>
            </Link>
            <Signout />
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        )}
      </div>
    )}
  </User>
);
