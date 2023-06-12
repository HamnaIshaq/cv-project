import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import FinalCV from "./components/FinalCV";

class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        name: "John Doe",
        email: "johnDoe@gmail.com",
        phoneNumber: 123456789,
      },
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onSubmitAddGeneralInfo = this.onSubmitAddGeneralInfo.bind(this);
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

  onSubmitAddGeneralInfo(e) {
    e.preventDefault();
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
        </form>
        Final Result:
        <FinalCV cvInfo={this.state} />
      </div>
    );
  }
}

export default App;
