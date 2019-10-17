import React, { Component } from 'react'

export default class EducationalProfile extends Component {
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
        <h3>Educational Profile</h3>
        <form>
          <div className="form-group">
            <label for="education">Education</label>
            <select className="form-control" id="education"
            defaultValue={values.education}
            onChange={handleChange('education')}>
              <option value ="null">---</option>
              <option value ="Bachelor of Science">Bachelor of Science</option>
              <option value ="Master of Science">Master of Science</option>
            </select>
          </div>
          <div className="form-group">
            <label for="markobtained">Mark Obtained</label>
            <input type="text" className="form-control" id="markobtained"
            placeholder="Mark Obtained" 
            defaultValue={values.markobtained}
            onChange={handleChange('markobtained')}/>
          </div>
          <div className="form-group">
            <label for="passingyear">Passing Year</label>
            <input type="text" className="form-control" id="passingyear" placeholder="Passing Year" 
            defaultValue={values.passingyear}
            onChange={handleChange('passingyear')}/>
          </div>
          <div className="form-group">
            <label for="university">University</label>
            <input type="text" className="form-control" id="university" placeholder="University" 
            defaultValue={values.university}
            onChange={handleChange('university')}/>
          </div>
          <button className="btn btn-primary" onClick={this.continue}>Next</button>
          <button className="btn btn-warning" onClick={this.back}>Previous</button>
        </form>
      </div>
    )
  }
}
