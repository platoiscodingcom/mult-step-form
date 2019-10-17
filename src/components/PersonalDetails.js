import React, { Component } from 'react'

export default class PersonalDetails extends Component {
  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  }
  back = e =>{
    e.preventDefault();
    this.props.prevStep();
  }
  
  render() {
    const {values, handleChange} = this.props;
    return (
      <div className ="step-form">
        <h3>Personal Details</h3>
        <form>
          <div className="form-group">
            <label for="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName"  placeholder="First Name" 
            defaultValue={values.firstName}
            onChange={handleChange('firstName')}/>
          </div>
          <div className="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder="Last Name" 
            defaultValue={values.lastName}
            onChange={handleChange('lastName')}/>
          </div>
          <div className="form-group">
            <label for="gender">Gender</label>
            <select className="form-control" id="gender" 
              defaultValue={values.gender}
              onChange={handleChange('gender')}>
              <option value ="null">---</option>
              <option value ="male">male</option>
              <option value ="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label for="phone">Phone</label>
            <input type="text" className="form-control" id="phone" placeholder="Phone" 
            defaultValue={values.phone}
            onChange={handleChange('phone')}/>
          </div>
          <button className="btn btn-primary" onClick={this.continue}>Next</button>
          <button className="btn btn-warning" onClick={this.back}>Previous</button>
        </form>
      </div>
    )
  }
}
