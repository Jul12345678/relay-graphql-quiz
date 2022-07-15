import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from './Environment';
import RelayApp from './RelayApp';

const AppQueryAllAppQuery = graphql`
  query AppQueryAllAppQuery {
    relayquestionsdisplay {
      question
    }
  }
`;

class AppQuery extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppQueryAllAppQuery}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <RelayApp />;
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

export default AppQuery;
