import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  state = {
    // name: "Chuong",
    // channel: "PHAN",
    firstname: "",
    lastname: "",
    arrayJob: [
      { id: "abcJob1", title: "developer", salary: "500$" },
      { id: "abcJob2", title: "tester", salary: "400$" },
      { id: "abcJob3", title: "manager", salary: "300$" },
    ],
  };
  // handleOnChangeName = (event) => {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // };
  // handleOnChangeChannel = (event) => {
  //   this.setState({
  //     channel: event.target.value,
  //   });
  // };
  // handleOnClickButton = () => {
  //   alert("Thanks for click me");
  // };
  handleChangeFirstname = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };
  handleChangeLastname = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  handleChangeonClick = (event) => {
    event.preventDefault();
    alert("click me");
    console.log(">> data state: ", this.state);
  };
  render() {
    console.log(">>> call render: ", this.state);
    // let name = "ACAX";
    // return <div>Hello My Component</div>;
    return (
      <>
        {/* <div className="abd">
          <div className="name">
            <input
              value={this.state.name}
              type="text"
              onChange={(event) => this.handleOnChangeName(event)}
            />
            <br></br>
            My name is {this.state.name}
          </div>
          <div className="channel">
            <input
              value={this.state.channel}
              type="selection"
              onChange={(event) => this.handleOnChangeChannel(event)}
            />
            <br></br>
            My channel is {this.state.channel}
          </div>
          <div>abcxyz</div>
        </div>
        <div className="click">
          <button
            onClick={() => {
              this.handleOnClickButton();
            }}
          >
            Click me
          </button>
        </div> */}
        <div>Hello Form</div>
        <br></br>
        <form action="/action_page.php">
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstname}
            onChange={(event) => this.handleChangeFirstname(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastname}
            onChange={(event) => this.handleChangeLastname(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            onClick={(event) => this.handleChangeonClick(event)}
          ></input>
        </form>
        <ChildComponent
          name={this.state.firstname}
          age={"20"}
          address={"Ha Noi"}
          arrayJob={this.state.arrayJob}
        />
      </>
    );
  }
}

export default MyComponent;
