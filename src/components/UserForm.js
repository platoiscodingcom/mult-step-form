import React, { Component } from 'react';
import CreateAccount from "./CreateAccount";
import EducationalProfile from "./EducationalProfile";
import PersonalDetails from "./PersonalDetails";
import Confirm from './Confirm';
import Success from './Success';


export default class UserForm extends Component {
  state = {
    step: 1,
    //step1: create account form
    email: '',
    newsletter: false,
    password: '',
    confirmpassword: '',
    //step2: educational profile
    education: '',
    markobtained: '',
    passingyear: '',
    university: '',
    //step3: personal details
    firstName: '',
    lastName: '',
    gender: '',
    phone:''
  }
  //previous to next step
  prevStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1
    });
  }
  //proceed to next step
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    });
  }
  // Handle fields change
  handleChange = input => e => {
    this.setState({[input]:e.target.value});
  }
  handleCheckboxChange =  (e) => {
    this.setState({newsletter: e.target.checked});
  }

  render() {
    const { step } = this.state;
    const {email, newsletter, password, confirmpassword} = this.state;
    const {education, markoptained, passingyear, university} = this.state;
    const { firstName, lastName, gender, phone } = this.state;
    const values = { email, newsletter, password, confirmpassword,
                      education, markoptained, passingyear, university,
                      firstName, lastName, gender, phone };

    switch (step) {
      case 1:
        return (
          <CreateAccount
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleCheckboxChange={this.handleCheckboxChange}
            values={values}
          />
        );
      case 2:
        return (
          <EducationalProfile
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Success />;
    }
  }
}