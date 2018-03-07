import React, { Component } from 'react'
import req from 'superagent'
import {withRouter} from 'react-router-dom'
import { Field, Card, Button, Area, Grid } from '../shared'

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    req.post('http://localhost:3001/auth/login').send({email: this.state.email, password: this.state.password}).then((res) => {
      localStorage.setItem('user', res.body.email)
      console.log(res.body.email)
      if(res.body.email){
        this.props.history.push('/students')
      }
    })
  }
  render() {
    return (
      <Grid columns="repeat(6, 1fr)" rows="repeat(6, 1fr)" gap={20}>
        <Area area="2/3/5/5">
          <Card>
            <form onSubmit={this.onSubmit}>
              <Field
                type="email"
                onChange={this.onChange}
                name="email"
                value={this.state.email}
              />
              <Field
                type="password"
                onChange={this.onChange}
                name="password"
                value={this.state.password}
              />
              <Button>Login</Button>
            </form>
          </Card>
        </Area>
      </Grid>
    )
  }
}

export default withRouter(LoginForm)
