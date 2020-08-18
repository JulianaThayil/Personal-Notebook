import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const Contact = props => (
  <tr>
    <td>{props.contact.nickname}</td>
    <td>{props.contact.name}</td>
    <td>{props.contact.phone}</td>
    <td>{props.contact.email}</td>
    <td>
      <a href="#" onClick={() => { props.deletecontact(props.contact._id) }}>delete</a>
    </td>
  </tr>
)
export default class contactList extends Component {
  constructor(props) {
    super(props);

    this.deletecontact = this.deletecontact.bind(this)

    this.state = {contacts: []};
  }

  componentDidMount() {
    axios.get('https://personal-records-manager.herokuapp.com/contacts')
      .then(response => {
        this.setState({ contacts: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletecontact(id) {
    axios.delete('https://personal-records-manager.herokuapp.com/contacts/'+id)
      .then(response => { console.log(response.data)})
      .catch((error) => {
        console.log(error);
      })

    this.setState({
      contacts: this.state.contacts.filter(el => el._id !== id)
    })
  }

  contactList() {
    return this.state.contacts.map(currentcontact => {
      return <Contact contact={currentcontact} deletecontact={this.deletecontact} key={currentcontact._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Your Contacts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Nickname</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.contactList() }
          </tbody>
        </table>
        <Button component={Link} to="/contact" variant="contained">Add a new contact</Button>
      </div>
    )
  }
}