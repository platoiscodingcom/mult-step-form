import React, { Component } from 'react'

export default class CreateAccount extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange, handleCheckboxChange } = this.props;
    return (
      <div className ="step-form">
        <h3>Create Account</h3>
        <form>
          <div className="form-group">
            <label for="email">Email Address </label>
            <input type="email" className="form-control" id="email" placeholder="Enter Email" 
            defaultValue={values.email}
            onChange={handleChange('email')}/>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="newsletter"
            checked={values.newsletter}
            onChange={handleCheckboxChange}/>
            <label className="form-check-label" for="newsletter">Subscribe to Newsletter</label>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" 
            defaultValue={values.password}
            onChange={handleChange('password')}/>
          </div>
          <div className="form-group">
            <label for="confirmpassword">Confirm Password</label>
            <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm Password" 
            defaultValue={values.confirmpassword}
            onChange={handleChange('confirmpassword')}/>
          </div>
          <button className="btn btn-primary" onClick={this.continue}>Next</button>
        </form>
      </div>
    )
  }
}
