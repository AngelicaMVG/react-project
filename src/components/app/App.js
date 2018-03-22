import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from '../login/Login';
// import { colors } from '../shared/colors'
import { Nav } from '../shared';
import StudentList from '../students/StudentList';
import StudentDetail from '../students/StudentDetail';

import CreateWeekElements from '../students/CreateWeekElements';
import WeeksList from '../weeks/weeksList';
import WeekDetail from '../weeks/weekDetail';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Router>
          <div>
            <Link to="/">Home</Link>

            <Link to="/students">Students</Link>
            <Switch>
              <Route exact path="/" component={CreateWeekElements} />
              <Route
                path="/students/:studentId/weeks/:id"
                component={WeekDetail}
              />
              <Route path="/students/:studentId/weeks" component={WeeksList} />
              <Route path="/students/:id" component={StudentDetail} />
              <Route path="/students" component={StudentList} />
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
