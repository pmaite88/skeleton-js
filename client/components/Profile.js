import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const PROFILE_QUERY = gql`
  query PROFILE($email: String!) {
    user(email: $email) {
      email
      firstName
      lastName
    }
  }
`;

class Profile extends Component {
  render() {
    return (
      <div>
        <Query
          query={PROFILE_QUERY}
          variables={{ email: 'a@a.com' }}
          fetchPolicy="network-only"
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return <div>{data.user.email}</div>;
          }}
        </Query>
      </div>
    );
  }
}

export default Profile;
