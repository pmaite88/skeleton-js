import Link from 'next/link';
import { Mutation } from 'react-apollo';
import User from './User';
import Signout from './Signout';

export default () => (
  <User>
    {({
      data: {
        me: { email, firstName, lastName }
      }
    }) => (
      <div>
        <p> Email: {email}</p>
        <p> FirstName: {firstName}</p>
        <p> LastName: {lastName}</p>
      </div>
    )}
  </User>
);
