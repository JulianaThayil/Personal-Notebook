import React, { Component } from 'react';
import axios from 'axios';

export default class CreateDebt extends Component {
  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeamount = this.onChangeamount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      description: '',
      amount: '',
    }
  }

  onChangename(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeamount(e) {
    this.setState({
      amount: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const Debt = {
      name: this.state.name,
      description: this.state.description,
      amount: this.state.amount
    }

    console.log(Debt);

    axios.post('https://personal-records-manager.herokuapp.com/debt/add', Debt)
      .then(res => alert(res.data))
      .catch((error) => {
        alert(error);
      })
  

  }

  render() {
    return (
    <div>
      <h3>Add a Debt</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
            <label>From (name): </label>
            <input  type="text"
                required
                value={this.state.name}
                onChange={this.onChangename}
                />
          </div>
        <div className="form-group"> 
          <label>Purpose: </label>
          <input  type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              placeholder="optional"
              />
        </div>
        <div className="form-group">
          <label>Amount: </label>
          <input 
          required
              type="text" 
              className="form-control"
              value={this.state.amount}
              onChange={this.onChangeamount}
              />
        </div>
       

        <div className="form-group">
          <input type="submit" value="Add" className="btn btn-dark" />
        </div>
      </form>
    </div>
    )
  }
}