import React, { Component } from 'react';
import req from 'superagent';
// import TableExampleSimple from "../shared/table/index.js";
import glamorous from 'glamorous';
import { colors } from '../shared/colors';
import { Link } from 'react-router-dom';
import CreateWeek from './CreateWeek';
import CreateWeekElements from './CreateWeekElements';
import WeeksList from '../weeks/weeksList';

const weekdays = {
  1: 'Lunes',
  2: 'Martes',
  3: 'Miercoles',
  4: 'Jueves',
  5: 'Viernes'
};

const Input = glamorous.input({
  marginTop: '20px',
  width: '30px',
  height: '30px',
  border: '1px solid black',
  outline: 'none'
});

const Table = glamorous.table({
  width: '70%',
  margin: '0px auto',
  textAlign: 'center',
  borderBottom: '2px solid black',
  padding: '20px'
});

const CardDetail = glamorous.div(
  {
    borderRadius: 4,
    height: '200px',
    padding: 20,
    textAlign: 'center',
    alignItems: 'center'
  },
  ({ color }) => ({
    backgroundColor: colors[color] || colors.white
  })
);

class StudentDetail extends Component {
  state = {
    student: {},
    homework: {},
    attendance: {}
  };
  componentDidMount() {
    req
      .get(`http://localhost:3001/students/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          ...this.state,
          student: { ...res.body }
        });
      });
  }

  toggleHomework = e => {
    this.setState({
      ...this.state,
      homework: { ...this.state.homework, [e.target.name]: e.target.checked }
    });
  };

  toggleAttendance = e => {
    this.setState({
      ...this.state,
      attendance: {
        ...this.state.attendance,
        [e.target.name]: e.target.checked
      }
    });
  };

  render() {
    console.log(this.state.student.weeks);

    return (
      <div>
        <CardDetail params={this.props.match.params}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '40%',
              margin: '0px auto',
              padding: 20
            }}
          >
            <div>
              <img width={100} src={this.state.student.imageLink} alt="" />
            </div>
            <div>
              <h2>{this.state.student.name}</h2>
              <h2>{this.state.student.lastName}</h2>
              <div>
                <p>succes</p>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <Link
              to="/"
              style={{
                width: '50px',
                background: 'red',
                textDecoration: 'none',
                padding: '20px',
                marginTop: '5%',
                color: 'white',
                position: 'absolute',
                top: '0px',
                right: '5%'
              }}
            >
              Create Week
            </Link>
          </div>
        </CardDetail>

        {this.state.student && <WeeksList student={this.state.student.id} />}

        {this.state.student.id &&
          this.state.student.weeks.map(week => (
            <Table key={week.id}>
              <thead>
                <tr>
                  <th>Week {week.id}</th>
                  {week.days.map(day => <th key={day.id}>{day.dayName}</th>)}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Homework</td>
                  {week.days.map(day => (
                    <td key={day.id}>
                      <Input
                        type="checkbox"
                        name={`homework_${weekdays[day.day]}`}
                        checked={
                          this.state.homework[
                            `homework_${day.weekId}_${weekdays[day.day]}`
                          ]
                        }
                        onChange={this.toggleHomework}
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Attendance</td>
                  {week.days.map(day => (
                    <td key={day.id}>
                      <Input
                        type="checkbox"
                        name={`homework_${weekdays[day.day]}`}
                        checked={
                          this.state.homework[
                            `attendance_${day.weekId}_${weekdays[day.day]}`
                          ]
                        }
                        onChange={this.toggleAttendance}
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </Table>
          ))}
      </div>
    );
  }
}

export default StudentDetail;
