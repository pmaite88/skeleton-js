import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Signout from './Signout';

const PROFILE_QUERY = gql`
  query PROFILE_QUERY {
    me {
      email
      firstName
      lastName
    }
  }
`;

const Profile = props => (
  <Query query={PROFILE_QUERY} fetchPolicy="network-only">
    {({ data, error, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;
      if (data.me) {
        return (
          <div>
            {data.me.email}
            <Signout />{' '}
          </div>
        );
      } else {
        return <div> Please log in </div>;
      }
    }}
  </Query>
);

export default Profile;
