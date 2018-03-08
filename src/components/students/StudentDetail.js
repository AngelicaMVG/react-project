import React, { Component } from "react";
import req from "superagent";
import TableExampleSimple from "../shared/table/index.js";
import glamorous from "glamorous";
import { colors } from "../shared/colors";

const Input = glamorous.input({
  marginTop: "20px",
  width: "30px",
  height: "30px",
  border: "1px solid black",
  outline: "none"
});

const Table = glamorous.table({
  width: "70%",
  margin: "0px auto",
  textAlign: "center",
  borderBottom: "2px solid black",
  padding: "20px"
});

const CardDetail = glamorous.div(
  {
    borderRadius: 4,
    height: "200px",
    padding: 20,
    textAlign: "center",
    alignItems: "center"
  },
  ({ color }) => ({
    backgroundColor: colors[color] || colors.white
  })
);

class StudentDetail extends Component {
  state = {
    student: {},
    status: []
  };
  componentDidMount() {
    req
      .get(`http://localhost:3001/students/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          ...this.state,
          student: { ...res.body },
          status: [...res.body.status]
        });
      });
  }

  render() {
    var status = this.state.student.status;
    return (
      <div>
        <CardDetail>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "40%",
              margin: "0px auto",
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
        </CardDetail>
        <TableExampleSimple students={status} />
      </div>
    );
  }
}

export default StudentDetail;
