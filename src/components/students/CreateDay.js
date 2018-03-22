import React, { Component } from 'react';
import request from 'superagent';

import glamorous from 'glamorous';

const Div = glamorous.div({
  width: '10%',
  margin: '10% auto',
  display: 'flex',
  flexWrap: 'wrap'
});

export default class CreateDay extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { day, week, student } = this.refs;
    e.preventDefault();
    if (this.refs.day.value !== '') {
      request
        .post(
          `http://localhost:3001/students/${student.value}/weeks/${
            week.value
          }/days/new`
        )
        .send({
          dayName: day.value,
          weekId: week.value,
          studentId: student.value
        })
        .then(newWeek => {
          console.log(newWeek);
          // this.props.history.push(`/students/${this.refs.student.value}`);
        });
    } else {
      alert('falta algun campo');
    }
  }
  render() {
    return (
      <Div>
        <form>
          <label htmlFor="">
            student
            <input type="text" ref="student" />
          </label>
          <label htmlFor="">
            week
            <input type="text" ref="week" />
          </label>
          <label htmlFor="">
            day
            <input type="text" ref="day" />
          </label>
          <br />
          <label htmlFor="">
            homework
            <input type="checkbox" ref="homework" />
          </label>
          <br />
          <label htmlFor="">
            attendance
            <input type="checkbox" ref="attendance" />
          </label>
          <br />
          <button onClick={this.handleClick}>send</button>
        </form>
      </Div>
    );
  }
}
