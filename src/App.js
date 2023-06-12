import React, { Component } from "react";
import uniqid from "uniqid";
import GeneralInfo from "./components/GeneralInfo";
import FinalCV from "./components/FinalCV";
import Education from "./components/Education";

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
          present: false,
        },
      ],
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.addMoreEducation = this.addMoreEducation.bind(this);
    this.onChangeEducation = this.onChangeEducation.bind(this);
    this.onClickDeleteEducation = this.onClickDeleteEducation.bind(this);
  }

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
        </form>
        Final Result:
        <FinalCV cvInfo={this.state} />
      </div>
    );
  }
}

export default App;
