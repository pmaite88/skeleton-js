import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Signin from './Signin';

import Link from 'next/link';

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;

      if (!data.me) {
        return (
          <>
            <Signin />
            or create an account:{' '}
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </>
        );
      }
      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;
