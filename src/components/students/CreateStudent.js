import React, { Component } from 'react';
import request from 'superagent';

export default class CreateStudent extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.refs.nombre.value !== '' && this.refs.apellido.value !== '') {
      request
        .post('http://localhost:3001/students/create')
        .send({
          name: this.refs.nombre.value,
          lastName: this.refs.apellido.value
        })
        .then(newStudent => {
          console.log(newStudent);
          // this.props.history.push('/students');
          alert('enviado');
        });
    } else {
      alert('falta algun campo');
    }
  }

  render() {
    return (
      <div>
        <h1>Student</h1>
        <form>
          <label>
            Name
            <input type="text" ref="nombre" />
          </label>
          <label>
            LastName
            <input type="text" ref="apellido" />
          </label>
          <button type="submit" name="action" onClick={this.handleClick}>
            Send
          </button>
        </form>
      </div>
    );
  }
}
