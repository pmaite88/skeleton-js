import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      email
      firstName
      lastName
    }
  }
`;

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {result => props.children(result)}
  </Query>
);

export default User;
export { CURRENT_USER_QUERY };
