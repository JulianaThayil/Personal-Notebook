import React, { Component } from 'react';
import axios from 'axios';

const Debt = props => (
  <tr>
    <td>{props.debt.name}</td>
    <td>{props.debt.description}</td>
    <td>{props.debt.amount}</td>
    <td>
     <a href="#" onClick={() => { props.deletedebt(props.debt._id) }}>Repayed</a>
    </td>
  </tr>
)
export default class DebtList extends Component {
  constructor(props) {
    super(props);

    this.deletedebt = this.deletedebt.bind(this)

    this.state = {debts: []};
  }

  componentDidMount() {
    axios.get('https://personal-records-manager.herokuapp.com/debt')
      .then(response => {
        this.setState({ debts: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletedebt(id) {
    axios.delete('https://personal-records-manager.herokuapp.com/debt/'+id)
    .then(res => alert(res.data))
    .catch((error) => {
      alert(error);
    })

    this.setState({
      debts: this.state.debts.filter(el => el._id !== id)
    })
  }

  debtList() {
    return this.state.debts.map(currentdebt => {
      return <Debt debt={currentdebt} deletedebt={this.deletedebt} key={currentdebt._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Your pending debts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>From</th>
              <th>Purpose</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.debtList() }
          </tbody>
        </table>
      </div>
    )
  }
}
