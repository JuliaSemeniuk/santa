import React from "react";
export default class DataBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ name: "", match: "", excludes: [], pass: "" }],
    };
  }

  onChangeUserName = (event) => {
    let currentUserName = event.target.value;
    this.setState({ name: currentUserName });
  };

  onClickCreateNewUser = () => {
    const users = this.state;
    const currenrUsers = users.slice();
    const newUser = {
      name: this.state.name,
      match: null,
      excludes: [],
      pass: "1111",
    };
    currenrUsers.push(newUser);
    this.setState({
      users: currenrUsers,
      name: "",
    });
  };

  render() {
    return (
      <div>
        <div>
          <p>Create new user</p>
          <input
            onChange={this.onChangeUserName}
            type="text"
            placeholder="name"
          ></input>
          <br />
          <input
            onClick={this.onClickCreateNewUser}
            type="button"
            value="Create"
          ></input>
        </div>
        <div></div>
      </div>
    );
  }
}
