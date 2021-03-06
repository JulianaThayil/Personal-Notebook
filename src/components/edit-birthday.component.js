import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
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
  componentDidMount() {
    axios.get('https://personal-records-manager.herokuapp.com/birthdays/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          nickname: response.data.nickname,
          description: response.data.description,
          birthdate: response.data.birthdate,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })


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

    axios.post('https://personal-records-manager.herokuapp.com/birthdays/update/' + this.props.match.params.id, Birthday)
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
              type="text" 
              className="form-control"
              value={this.state.birthdate}
              onChange={this.onChangeBirthdate}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Birthday Log" className="btn btn-dark" />
        </div>
      </form>
    </div>
    )
  }
}