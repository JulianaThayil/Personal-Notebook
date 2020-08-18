import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Birthday = props => (
  <tr>
    <td>{props.birthday.nickname}</td>
    <td>{props.birthday.description}</td>
    <td>{props.birthday.birthdate}</td>
    <td>
      <Link to={"/edit/"+props.birthday._id}>edit</Link> | <a href="#" onClick={() => { props.deleteBirthday(props.birthday._id) }}>delete</a>
    </td>
  </tr>
)
export default class BirthdayList extends Component {
  constructor(props) {
    super(props);

    this.deleteBirthday = this.deleteBirthday.bind(this)

    this.state = {birthdays: []};
  }

  componentDidMount() {
    axios.get('https://personal-records-manager.herokuapp.com/birthdays')
      .then(response => {
        this.setState({ birthdays: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteBirthday(id) {
    axios.delete('https://personal-records-manager.herokuapp.com/birthdays/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      birthdays: this.state.birthdays.filter(el => el._id !== id)
    })
  }

  birthdayList() {
    return this.state.birthdays.map(currentbirthday => {
      return <Birthday birthday={currentbirthday} deleteBirthday={this.deleteBirthday} key={currentbirthday._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Upcoming Birthdays</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Nickname</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.birthdayList() }
          </tbody>
        </table>
      </div>
    )
  }
}