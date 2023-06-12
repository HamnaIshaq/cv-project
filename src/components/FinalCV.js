import React, { Component } from "react";

class FinalCV extends Component {
  render() {
    const { generalInfo, education } = this.props.cvInfo;

    const { name, email, phoneNumber } = generalInfo;
    //const { schoolName, degreeName, startDate, endDate } =

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

    return (
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{phoneNumber}</p>

        <h2>Education</h2>
        <div>{educationList}</div>
      </div>
    );
  }
}

export default FinalCV;
