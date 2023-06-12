import React, { Component } from "react";

class FinalCV extends Component {
  render() {
    const { generalInfo } = this.props.cvInfo;

    const { name, email, phoneNumber } = generalInfo;

    return (
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{phoneNumber}</p>
      </div>
    );
  }
}

export default FinalCV;
