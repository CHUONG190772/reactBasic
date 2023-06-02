import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Chuong",
    channel: "PHAN",
  };
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeChannel = (event) => {
    this.setState({
      channel: event.target.value,
    });
  };
  render() {
    let name = "ACAX";
    // return <div>Hello My Component</div>;
    return (
      <div className="abd">
        <div className="name">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          My name is {this.state.name}
        </div>
        <div className="channel">
          <input
            value={this.state.channel}
            type="text"
            onChange={(event) => this.handleOnChangeChannel(event)}
          />
          <br></br>
          My channel is {this.state.channel}
        </div>
        <div>abcxyz</div>
      </div>
    );
  }
}

export default MyComponent;
