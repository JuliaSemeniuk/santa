import React from "react";

export default class SecretSanta extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users = [
        {name: 'Andriy', password: 'fylhsq', match: ['Pasha', 'Masha', 'Anton', 'Julia'], exlude: 'Tania'},
        {name: 'Tania',  password: 'nfyzey', match: ['Pasha', 'Masha', 'Anton', 'Julia'], exlude: 'Andriy'},
        {name: 'Pasha',  password: 'gfifvf', match: ['Andriy', 'Tania', 'Anton', 'Julia'], exlude: 'Masha'},
        {name: 'Masha',  password: 'vfifnj', match: ['Andriy', 'Tania', 'Anton', 'Julia'], exlude: 'Pasha'},
        {name: 'Anton',  password: 'fynjyc', match: ['Pasha', 'Masha', 'Andriy', 'Tania'], exlude: 'Julia'},
        {name: 'Julia',  password: 'lekszc', match: ['Pasha', 'Masha', 'Andriy', 'Tania'], exlude: 'Anton'},
      ]
    }
  }
  render() {
    return <div></div>;
  }
}
