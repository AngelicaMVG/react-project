import React, { Component, Fragment } from "react";
import { Card, List, ListItem, Label, Link } from "../shared";
import req from "superagent";

class StudentList extends Component {
  state = {
    students: []
  };

  componentWillMount() {
    req.get("http://localhost:3001/students").then(response => {
      this.setState({
        ...this.state,
        students: [...response.body]
      });
    });
  }
  render() {
    return (
      <Fragment>
        <h2>Lista de estudiantes CIMI</h2>
        <List>
          {this.state.students.map(student => (
            <ListItem key={student.id}>
              <Link to={`/students/${student.id}`}>
                <Card>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>
                      {student.name} {student.lastName}
                    </span>
                    <Label color={student.weeks.id}>{student.weeks.id}</Label>
                  </div>
                </Card>
              </Link>
            </ListItem>
          ))}
        </List>
      </Fragment>
    );
  }
}

export default StudentList;
