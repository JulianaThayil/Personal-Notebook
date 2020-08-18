import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateBirthday extends Component {
  constructor(props) {
    super(props);

    this.onChangeNickname = this.onChangeNickname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeBirthdate = this.onChangeBirthdate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nickname: '',
      description: '',
      birthdate: '',
      users: []
    }
  }

  onChangeNickname(e) {
    this.setState({
      nickname: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeBirthdate(e) {
    this.setState({
      birthdate: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const Birthday = {
      nickname: this.state.nickname,
      description: this.state.description,
      birthdate: this.state.birthdate
    }

    console.log(Birthday);

    axios.post('https://personal-records-manager.herokuapp.com/birthdays/add', Birthday)
      .then(res => alert(res.data))
      .catch((error) => {
        console.log(error);
      })
      e.preventDefault();

  }

  render() {
    return (
    <div>
      <h3>Create New Birthday Log</h3>
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
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Birthday: </label>
          <input 
          required
              type="text" 
              className="form-control"
              value={this.state.birthdate}
              onChange={this.onChangeBirthdate}
              />
        </div>
       

        <div className="form-group">
          <input type="submit" value="Create Birthday Log" className="btn btn-dark" />
        </div>
      </form>
    </div>
    )
  }
}