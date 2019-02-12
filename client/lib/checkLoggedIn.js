import gql from 'graphql-tag';
// import CURRENT_USER_QUERY from '../components/User';

export default async apolloClient => {
  const CURRENT_USER_QUERY = gql`
    query CURRENT_USER_QUERY {
      me {
        email
        firstName
        lastName
      }
    }
  `;
  const { me } = await apolloClient.query({ query: CURRENT_USER_QUERY });

  return { loggedInUser: me };
};
