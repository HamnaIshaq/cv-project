import React, { Component } from "react";
import uniqid from "uniqid";
import GeneralInfo from "./components/GeneralInfo";
import FinalCV from "./components/FinalCV";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";

class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        name: "John Doe",
        email: "johnDoe@gmail.com",
        phoneNumber: 123456789,
      },
      education: [
        {
          id: uniqid(),
          schoolName: "School Name",
          degreeName: "Degree Name",
          startDate: "2020-10-10",
          endDate: "",
          present: true,
        },
      ],
      workExperience: [
        {
          id: uniqid(),
          companyName: "Company Name",
          positionTitle: "Position",
          mainTasks: "tasks",
          startDate: "2020-10-10",
          endDate: "",
          present: true,
        },
      ],
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.addMoreEducation = this.addMoreEducation.bind(this);
    this.onChangeEducation = this.onChangeEducation.bind(this);
    this.onClickDeleteEducation = this.onClickDeleteEducation.bind(this);
    this.addMoreWorkExperience = this.addMoreWorkExperience.bind(this);
    this.onChangeWorkExperience = this.onChangeWorkExperience.bind(this);
    this.onClickDeleteWorkExperience =
      this.onClickDeleteWorkExperience.bind(this);
  }

  // General Info

  onChangeName(e) {
    const generalInfoBeforeUpdate = this.state.generalInfo;
    generalInfoBeforeUpdate.name = e.target.value;

    this.setState({
      generalInfo: generalInfoBeforeUpdate,
    });
  }

  onChangeEmail(e) {
    const generalInfoBeforeUpdate = this.state.generalInfo;
    generalInfoBeforeUpdate.email = e.target.value;

    this.setState({
      generalInfo: generalInfoBeforeUpdate,
    });
  }

  onChangePhoneNumber(e) {
    const generalInfoBeforeUpdate = this.state.generalInfo;
    generalInfoBeforeUpdate.phoneNumber = e.target.value;

    this.setState({
      generalInfo: generalInfoBeforeUpdate,
    });
  }

  // Education

  addMoreEducation() {
    const addMoreEducation = {
      id: uniqid(),
      schoolName: "School Name",
      degreeName: "Degree Name",
      startDate: "12-12-12",
      endDate: "12-12-13",
    };

    const currentEducation = this.state.education;

    currentEducation.push(addMoreEducation);
    this.setState({
      education: currentEducation,
    });
  }

  onChangeEducation(e) {
    const id = e.target.getAttribute("data-id");
    const inputToChange = e.target.getAttribute("data-input");

    const field = this.state.education.filter(
      (education) => education.id === id
    );

    if (inputToChange === "present") {
      field[0][inputToChange] = e.target.checked;
    } else {
      field[0][inputToChange] = e.target.value;
    }

    const updatedFields = this.state.education.map((education) => {
      if (education.id === id) {
        return field[0];
      }
      return education;
    });

    this.setState({
      education: updatedFields,
    });
  }

  onClickDeleteEducation(e) {
    const filteredData = this.state.education.filter(
      (education) => education.id !== e.target.id
    );

    this.setState({
      education: filteredData,
    });
  }

  // Work Experience

  addMoreWorkExperience() {
    const addMoreWorkExperience = {
      id: uniqid(),
      companyName: "Company Name",
      positionTitle: "Position",
      mainTasks: "tasks",
      startDate: "2020-10-10",
      endDate: "",
      present: true,
    };

    const currentWorkExp = this.state.workExperience;

    currentWorkExp.push(addMoreWorkExperience);
    this.setState({
      workExperience: currentWorkExp,
    });
  }

  onChangeWorkExperience(e) {
    const id = e.target.getAttribute("data-id");
    const inputToChange = e.target.getAttribute("data-input");

    const field = this.state.workExperience.filter(
      (workExp) => workExp.id === id
    );

    if (inputToChange === "present") {
      field[0][inputToChange] = e.target.checked;
    } else {
      field[0][inputToChange] = e.target.value;
    }

    const updatedFields = this.state.workExperience.map((workExp) => {
      if (workExp.id === id) {
        return field[0];
      }
      return workExp;
    });

    this.setState({
      workExp: updatedFields,
    });
  }

  onClickDeleteWorkExperience(e) {
    const filteredData = this.state.workExperience.filter(
      (workExp) => workExp.id !== e.target.id
    );

    this.setState({
      workExperience: filteredData,
    });
  }

  render() {
    return (
      <div>
        cv project
        <form>
          <GeneralInfo
            generalInfo={this.state.generalInfo}
            onChangeName={this.onChangeName}
            onChangeEmail={this.onChangeEmail}
            onChangePhoneNumber={this.onChangePhoneNumber}
          />
          <Education
            education={this.state.education}
            addMoreEducation={this.addMoreEducation}
            onChangeEducation={this.onChangeEducation}
            onClickDeleteEducation={this.onClickDeleteEducation}
          />
          <WorkExperience
            workExperience={this.state.workExperience}
            addMoreWorkExperience={this.addMoreWorkExperience}
            onChangeWorkExperience={this.onChangeWorkExperience}
            onClickDeleteWorkExperience={this.onClickDeleteWorkExperience}
          />
        </form>
        Final Result:
        <FinalCV cvInfo={this.state} />
      </div>
    );
  }
}

export default App;
