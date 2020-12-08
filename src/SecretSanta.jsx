import React from "react";

export default class SecretSanta extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          name: "Andriy",
          password: "fylhsq",
          match: ["Pasha", "Masha", "Anton", "Julia"],
          exlude: "Tania",
          nameValidation: false,
        },
        {
          name: "Tania",
          password: "nfyzey",
          match: ["Pasha", "Masha", "Anton", "Julia"],
          exlude: "Andriy",
          nameValidation: false,
        },
        {
          name: "Pasha",
          password: "gfifvf",
          match: ["Andriy", "Tania", "Anton", "Julia"],
          exlude: "Masha",
          nameValidation: false,
        },
        {
          name: "Masha",
          password: "vfifnj",
          match: ["Andriy", "Tania", "Anton", "Julia"],
          exlude: "Pasha",
          nameValidation: false,
        },
        {
          name: "Anton",
          password: "fynjyc",
          match: ["Pasha", "Masha", "Andriy", "Tania"],
          exlude: "Julia",
          nameValidation: false,
        },
        {
          name: "Julia",
          password: "lekszc",
          match: ["Pasha", "Masha", "Andriy", "Tania"],
          exlude: "Anton",
          nameValidation: false,
        },
      ],
      inValid: false,
    };
  }

  validateUserName = (event) => {
    const { users } = this.state;
    let currentUserName = event.target.value;
    let currentValidation;

    const currentIndex = users.findIndex(
      (user) => user.name === currentUserName
    );

    if (currentIndex === -1) {
      this.setState({ inValid: true });
    } else {
      const newUsers = users.slice();
      newUsers[currentIndex].nameValidation = currentValidation;

      this.setState({ users: newUsers, inValid: false });
    }
  };

  // onClickSignIn = () => {
  //   this.validateUserName();
  // };

  render() {
    const { users, inValid } = this.state;
    return (
      <div>
        <div>
          <p>
            Ho Ho Ho! <br />
            Welcome to the Secret Santa.
            <br /> Please, enter your name and password!
          </p>
          <input
            onChange={this.validateUserName}
            type="text"
            placeholder="name"
            value={this.state.name}
            style={{
              borderColor: this.state.inValid ? "#D41B18" : "#E4D4B3",
            }}
          ></input>
          <br />
          <input type="password" placeholder="password"></input>
          <br />
          <input
            //onClick={this.onClickSignIn}
            type="button"
            value="sign in"
          ></input>
          {inValid && <div>Ho Ho Holy crap</div>}
        </div>
      </div>
    );
  }
}
