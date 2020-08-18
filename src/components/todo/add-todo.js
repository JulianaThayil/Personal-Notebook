import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangetitle = this.onChangetitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangedeadline = this.onChangedeadline.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      description: '',
      deadline: '',
    }
  }

  onChangetitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangedeadline(e) {
    this.setState({
      deadline: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const Todo = {
      title: this.state.title,
      description: this.state.description,
      deadline: this.state.deadline
    }

    console.log(Todo);

    axios.post('https://personal-records-manager.herokuapp.com/todo/add', Todo)
      .then(res => alert(res.data))
      .catch((error) => {
        alert(error);
      })
  

  }

  render() {
    return (
    <div>
      <h3>Add a ToDo</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
            <label>Title: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.title}
                onChange={this.onChangetitle}
                />
          </div>
        <div className="form-group"> 
          <label>Description: </label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              placeholder="optional"
              ></textarea>
        </div>
        <div className="form-group">
          <label>Deadline: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.deadline}
              onChange={this.onChangedeadline}
              placeholder="optional"
              />
        </div>
       

        <div className="form-group">
          <input type="submit" value="Add Todo" className="btn btn-dark" />
        </div>
      </form>
    </div>
    )
  }
}