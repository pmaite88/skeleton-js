import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    question
  }
`;

class Item extends Component {
  render() {
    return (
      <div>
        <Query query={ALL_ITEMS_QUERY} fetchPolicy="network-only">
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return <div>{data.question}</div>;
          }}
        </Query>
      </div>
    );
  }
}

export default Item;
