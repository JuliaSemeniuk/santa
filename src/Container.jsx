import React from "react";
export default class DataBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ name: "", match: "", excludes: [], pass: "" }],
      name: "",
    };
  }

  onChangeUserName = (event) => {
    let currentUserName = event.target.value;
    this.setState({ name: currentUserName });
  };

  onClickCreateNewUser = () => {
    const { users } = this.state;
    const currentUsers = users.slice();
    const newUser = {
      name: this.state.name,
      match: null,
      excludes: [],
      pass: "1111",
    };
    currentUsers.push(newUser);
    this.setState({
      users: currentUsers,
      name: "",
    });
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <div>
          <p>Create new user</p>
          <input
            onChange={this.onChangeUserName}
            type="text"
            placeholder="name"
            value={this.state.name}
          ></input>
          <br />
          <input
            onClick={this.onClickCreateNewUser}
            type="button"
            value="Create"
          ></input>
        </div>
        <div>
          <table>
            <tr>
              <td>Name</td>
              <td>Match</td>
              <td>Excludes</td>
              <td>Password</td>
            </tr>
            {users.map((value) => {
              return (
                <tr>
                  <td>{value.name}</td>
                  <td>{value.match}</td>
                  <td>{value.excludes}</td>
                  <td>{value.pass}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}
