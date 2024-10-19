import React, { Component } from "react";

class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ fullName: event.target.value });
  };

  handleReservation = () => {
    // Pass the reservation data to the parent component
    this.props.onReservationConfirm({
      productName: this.props.productName,
      fullName: this.state.fullName,
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={this.state.fullName}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleReservation}>Confirm Reservation</button>
      </div>
    );
  }
}

export default ReservationForm;
