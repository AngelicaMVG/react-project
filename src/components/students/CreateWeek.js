import React, { Component } from 'react';
import request from 'superagent';
import glamorous from 'glamorous';

const Div = glamorous.div({
  width: '10%',
  margin: '10% auto',
  display: 'flex',
  flexWrap: 'wrap'
});

export default class CreateWeek extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.refs.student.value !== '' && this.refs.week.value !== '') {
      request
        .post(
          `http://localhost:3001/students/${this.refs.student.value}/weeks/new`
        )
        .send({
          studentId: this.refs.student.value,
          id: this.refs.week.value
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
          <label htmlFor="#student">
            Student
            <input id="student" type="text" ref="student" />
          </label>
          <label>
            Week
            <input type="text" ref="week" />
          </label>
          <button onClick={this.handleClick}>Send</button>
        </form>
      </Div>
    );
  }
}
