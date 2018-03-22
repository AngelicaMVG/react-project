import React, { Component } from 'react';

import CreateDay from './CreateDay';
import CreateWeek from './CreateWeek';
import CreateStudent from './CreateStudent';

export default class CreateWeekElements extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <CreateStudent />
        <CreateWeek />
        <CreateDay params={this.props.match.params} />
      </div>
    );
  }
}
