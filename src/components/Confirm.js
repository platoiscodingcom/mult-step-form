import React, { Component } from 'react'

export default class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { email, newsletter,
                education, markoptained, passingyear, university,
                firstName, lastName, gender, phone }
    } = this.props;
    return (
      <div className="step-form">
        <h3>Confirm User Data</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="font-weight-bold">Email: </span>{email}</li>
          <li className="list-group-item">
            <span className="font-weight-bold">Newsletter: </span>{newsletter ? 'yes' : 'no'}</li>
          <li className="list-group-item">
            <span className="font-weight-bold">Education: </span>{education}</li>
          <li className="list-group-item">
            <span className="font-weight-bold">Mark Obtained: </span>{markoptained}</li>
          <li className="list-group-item">
            <span className="font-weight-bold">Passing Year: </span>{passingyear}</li>
          <li className="list-group-item">
            <span className="font-weight-bold">University: </span>{university}</li>
          <li className="list-group-item">
            <span className="font-weight-bold">Fist Name: </span>{firstName}</li>
          <li className="list-group-item">
            <span className="font-weight-bold">Last Name: </span>{lastName}</li>
          <li className="list-group-item">
            <span className="font-weight-bold">Gender: </span>{gender}</li>
          <li className="list-group-item">
            <span className="font-weight-bold">Phone: </span>{phone}</li>
        </ul>
        <button className="btn btn-success" onClick={this.continue}>Submit</button>
        <button className="btn btn-warning" onClick={this.back}>Previous</button>
      </div>
    )
  }
}
