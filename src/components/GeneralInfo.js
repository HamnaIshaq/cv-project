import React, { Component } from "react";

class GeneralInfo extends Component {
  render() {
    const { name, email, phoneNumber } = this.props.generalInfo;

    return (
      <div>
        <h2>General Info</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={this.props.onChangeName}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={this.props.onChangeEmail}
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={this.props.onChangePhoneNumber}
        />
      </div>
    );
  }
}

export default GeneralInfo;
