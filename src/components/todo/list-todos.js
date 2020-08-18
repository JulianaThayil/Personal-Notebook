import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
  <tr>
    <td>{props.todo.title}</td>
    <td>{props.todo.description}</td>
    <td>{props.todo.deadline}</td>
    <td>
     <a href="#" onClick={() => { props.deletetodo(props.todo._id) }}>Mark as done</a>
    </td>
  </tr>
)
export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.deletetodo = this.deletetodo.bind(this)

    this.state = {todos: []};
  }

  componentDidMount() {
    axios.get('https://personal-records-manager.herokuapp.com/todo')
      .then(response => {
        this.setState({ todos: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletetodo(id) {
    axios.delete('https://personal-records-manager.herokuapp.com/todo/'+id)
    .then(res => alert(res.data))
    .catch((error) => {
      alert(error);
    })

    this.setState({
      todos: this.state.todos.filter(el => el._id !== id)
    })
  }

  todoList() {
    return this.state.todos.map(currenttodo => {
      return <Todo todo={currenttodo} deletetodo={this.deletetodo} key={currenttodo._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Your Todos List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.todoList() }
          </tbody>
        </table>
      </div>
    )
  }
}