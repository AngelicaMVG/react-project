import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import glamorous from "glamorous";

const Table = glamorous.table({
  width: "70%",
  margin: "0px auto",
  textAlign: "center",
  borderBottom: "2px solid black",
  padding: "20px"
});

const Container = glamorous.div({
  paddingTop: "50px"
});

const Input = glamorous.input({
  marginTop: "20px",
  width: "30px",
  height: "30px",
  border: "1px solid black",
  outline: "none"
});

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class TableExampleSimple extends Component {
  render() {
    var array = [];
    let students = this.props.students;
    for (var variable in students) {
      array.push(students[variable]);
    }

    var weekTable = array.map(week => {
      console.log(week);
      if (week.week === 1) {
        return (
          <Table>
            <thead>
              <th>{week.week}</th>
              <th>{week.day}</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Status</th>
            </thead>
            <tbody>
              <tr>
                <td style={{ paddingTop: "20px" }}>Homework</td>
                <td>
                  <Input type="checkbox" />
                </td>
                <td>
                  <Input type="checkbox" />
                </td>
                <td>
                  <Input type="checkbox" />
                </td>
                <td>
                  <Input type="checkbox" />
                </td>
                <td>
                  <Input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: "20px" }}>Attendance</td>
                <td>
                  <Input type="checkbox" />
                </td>
                <td>
                  <Input type="checkbox" />
                </td>
                <td>
                  <Input type="checkbox" />
                </td>
                <td>
                  <Input type="checkbox" />
                </td>
                <td>
                  <Input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </Table>
        );
      }
    });

    return <Container>{weekTable}</Container>;
  }
}

export default TableExampleSimple;
