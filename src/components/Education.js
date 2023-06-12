import React, { Component } from "react";

class Education extends Component {
  render() {
    const educationArr = this.props.education;

    const educationInputs = educationArr.map((education) => {
      return (
        <div key={education.id}>
          <label htmlFor={education.id + "-school-name"}>School Name:</label>
          <input
            type="text"
            id={education.id + "-school-name"}
            data-input="schoolName"
            data-id={education.id}
            value={education.schoolName}
            onChange={this.props.onChangeEducation}
          />
          <label htmlFor={education.id + "-title-of-study"}>
            Title of Study:
          </label>
          <input
            type="text"
            id={education.id + "-title-of-study"}
            data-input="degreeName"
            data-id={education.id}
            value={education.degreeName}
            onChange={this.props.onChangeEducation}
          />
          <label htmlFor={education.id + "-start-date"}>Start Date:</label>
          <input
            type="date"
            id={education.id + "-start-date"}
            data-input="startDate"
            data-id={education.id}
            value={education.startDate}
            onChange={this.props.onChangeEducation}
          />

          <label htmlFor={education.id + "-end-date"}>End Date:</label>
          <input
            type="date"
            id={education.id + "-end-date"}
            data-input="endDate"
            data-id={education.id}
            value={education.endDate}
            onChange={this.props.onChangeEducation}
          />
          <input
            type="checkbox"
            id={education.id + "-present"}
            data-input="present"
            data-id={education.id}
            checked={education.present}
            onChange={this.props.onChangeEducation}
          />
          <label htmlFor={education.id + "-present"}>Present</label>
          <button
            type="button"
            id={education.id}
            onClick={this.props.onClickDeleteEducation}
          >
            Delete
          </button>
        </div>
      );
    });

    return (
      <div>
        <h2>Education</h2>
        <button type="button" onClick={this.props.addMoreEducation}>
          Add
        </button>
        {educationInputs}
      </div>
    );
  }
}

export default Education;
