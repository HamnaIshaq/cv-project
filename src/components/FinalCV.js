import React, { Component } from "react";

class FinalCV extends Component {
  render() {
    const { generalInfo, education, workExperience } = this.props.cvInfo;

    const { name, email, phoneNumber } = generalInfo;

    const educationList = education.map((ed) => {
      return (
        <div key={ed.id}>
          <p>School: {ed.schoolName}</p>
          <p>Degree Name: {ed.degreeName}</p>
          <p>
            {ed.startDate} - {ed.present ? "Present" : ed.endDate}
          </p>
        </div>
      );
    });

    const workExpList = workExperience.map((workExp) => {
      return (
        <div key={workExp.id}>
          <p>Company Name: {workExp.companyName}</p>
          <p>Position Title: {workExp.positionTitle}</p>
          <p>Main Tasks: {workExp.mainTasks}</p>
          <p>
            {workExp.startDate} -{" "}
            {workExp.present ? "Present" : workExp.endDate}
          </p>
        </div>
      );
    });

    return (
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{phoneNumber}</p>

        <h2>Education</h2>
        <div>{educationList}</div>

        <h2>Work Experience</h2>
        <div>{workExpList}</div>
      </div>
    );
  }
}

export default FinalCV;
