import React, { Component } from 'react';
import axios from 'axios';

export default class CreateContacts extends Component {
  constructor(props) {
    super(props);

    this.onChangeNickname = this.onChangeNickname.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nickname: '',
      name:'',
      phone:'',
      email:'',
    }
  }

  onChangeNickname(e) {
    this.setState({
      nickname: e.target.value
    })
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      nickname: this.state.nickname,
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email

    }


    axios.post('https://personal-records-manager.herokuapp.com/contacts/add', user)
      .then(res => alert(res.data))
      .catch((error) => {
        console.log(error);
      })
      e.preventDefault();

    //window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create New Contact</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Nickname: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.nickname}
                onChange={this.onChangeNickname}
                />
          </div>
          <div className="form-group"> 
            <label>Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
          </div>
          <div className="form-group"> 
          <label>Phone: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
              />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
          <div className="form-group">
            <input type="submit" value="Create Contact" className="btn btn-dark" />
          </div>
        </form>
      </div>
    )
  }
}