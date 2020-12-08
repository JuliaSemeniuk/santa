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
        },
        {
          name: "Tania",
          password: "nfyzey",
          match: ["Pasha", "Masha", "Anton", "Julia"],
          exlude: "Andriy",
        },
        {
          name: "Pasha",
          password: "gfifvf",
          match: ["Andriy", "Tania", "Anton", "Julia"],
          exlude: "Masha",
        },
        {
          name: "Masha",
          password: "vfifnj",
          match: ["Andriy", "Tania", "Anton", "Julia"],
          exlude: "Pasha",
        },
        {
          name: "Anton",
          password: "fynjyc",
          match: ["Pasha", "Masha", "Andriy", "Tania"],
          exlude: "Julia",
        },
        {
          name: "Julia",
          password: "lekszc",
          match: ["Pasha", "Masha", "Andriy", "Tania"],
          exlude: "Anton",
        },
      ],
    };
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <div>
          <p>
            Ho Ho Ho! <br />
            Welcome to the Secret Santa.
            <br /> Please, enter your name and password!
          </p>
          <input type="text" placeholder="name"></input>
          <br />
          <input type="password" placeholder="password"></input>
          <br />
          <input type="button" value="sign in"></input>
        </div>
      </div>
    );
  }
}
