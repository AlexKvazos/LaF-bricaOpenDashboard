import React from 'react';
import { root } from 'baobab-react/higher-order';
import state from '../state';

@root(state)

class AppContainer extends React.Component {

  render() {
    return this.props.children;
  }

}

export default AppContainer;
