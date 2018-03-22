import React, { Component, Fragment } from 'react';
import { Card, List, ListItem, Label, Link } from '../shared';
import req from 'superagent';

class WeeksList extends Component {
  state = {
    weeks: []
  };

  componentWillMount() {
    const uri = 'http://localhost:3001/students/';
    req.get(`${uri}${this.props.student}/weeks`).then(response => {
      this.setState({
        ...this.state,
        weeks: [...response.body]
      });
    });
  }
  render() {
    console.log(this.state.weeks);
    console.log(this.props);
    return this.state.weeks.map(week => {
      return (
        <p key={week.id} class="hello">
          <Link to={`/students/${this.props.student}/weeks/${week.id}`}>
            {week.id} - {week.week}
          </Link>
        </p>
      );
    });
  }
}

export default WeeksList;
