import React, {Component} from 'react'
import req from 'superagent'
import { Field, Card, Button, Area, Grid } from '../shared'

class StudentDetail extends Component {

  state = {
    student: {}
  }
  componentWillMount(){
    req.get(`http://localhost:3001/students/${this.props.match.params.id}`).then((res) => {
      this.setState({
        ...this.state, student: {...res.body}
      })
    })
  }
  render(){
    return (
      <div>
        <Grid columns="repeat(6, 1fr)" rows="repeat(6, 1fr)" gap={20}>
          <Area area="2/3/5/5">
                <img   width={60} src={this.state.student.imageLink} alt=""/>

            <h2>{this.state.student.name}</h2>
            <h2>{this.state.student.lastName}</h2>
          </Area>
        </Grid>


      </div>
    )
  }
}

export default StudentDetail
