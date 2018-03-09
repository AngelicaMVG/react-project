import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../login/Login";
// import { colors } from '../shared/colors'
import { Nav } from "../shared";
import StudentList from "../students/StudentList";
import StudentDetail from "../students/StudentDetail";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/students/:id" component={StudentDetail} />
            <Route path="/students" component={StudentList} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
