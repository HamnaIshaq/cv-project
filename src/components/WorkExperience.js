import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    const workExperienceArr = this.props.workExperience;

    const workExperienceInputs = workExperienceArr.map((workExp) => {
      return (
        <div key={workExp.id}>
          <label htmlFor={workExp.id + "-company-name"}>Company Name:</label>
          <input
            type="text"
            id={workExp.id + "-company-name"}
            data-input="companyName"
            data-id={workExp.id}
            value={workExp.companyName}
            onChange={this.props.onChangeWorkExperience}
          />
          <label htmlFor={workExp.id + "-position-title"}>
            Position Title:
          </label>
          <input
            type="text"
            id={workExp.id + "-position-title"}
            data-input="positionTitle"
            data-id={workExp.id}
            value={workExp.positionTitle}
            onChange={this.props.onChangeWorkExperience}
          />
          <label htmlFor={workExp.id + "-main-tasks"}>Main Tasks:</label>
          <textarea
            id={workExp.id + "-main-tasks"}
            cols="30"
            rows="10"
            data-input="mainTasks"
            data-id={workExp.id}
            value={workExp.mainTasks}
            onChange={this.props.onChangeWorkExperience}
          ></textarea>
          <label htmlFor={workExp.id + "-start-date"}>Start Date:</label>
          <input
            type="date"
            id={workExp.id + "-start-date"}
            data-input="startDate"
            data-id={workExp.id}
            value={workExp.startDate}
            onChange={this.props.onChangeWorkExperience}
          />

          <label htmlFor={workExp.id + "-end-date"}>End Date:</label>
          <input
            type="date"
            id={workExp.id + "-end-date"}
            data-input="endDate"
            data-id={workExp.id}
            value={workExp.endDate}
            onChange={this.props.onChangeWorkExperience}
          />
          <input
            type="checkbox"
            id={workExp.id + "-present"}
            data-input="present"
            data-id={workExp.id}
            checked={workExp.present}
            onChange={this.props.onChangeWorkExperience}
          />
          <label htmlFor={workExp.id + "-present"}>Present</label>
          <button
            type="button"
            id={workExp.id}
            onClick={this.props.onClickDeleteWorkExperience}
          >
            Delete
          </button>
        </div>
      );
    });

    return (
      <div>
        <h2>Work Experience</h2>
        <button type="button" onClick={this.props.addMoreWorkExperience}>
          Add
        </button>
        {workExperienceInputs}
      </div>
    );
  }
}

export default WorkExperience;
