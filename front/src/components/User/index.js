import React, { Component } from 'react';
import axios from 'axios';


class User extends Component {

  constructor() {
    super();
    this.state = {
      setPassword: false
    }
  }

  async deleteUser(user) {
    await axios.delete(`http://localhost:4000/users/delete/${user}`);
  }


  render() {
    return (
      <div>
        <li>{this.props.user.username}
          <button >Change Name</button>
          <button onClick={() => this.deleteUser(this.props.user.username)}>X</button>
          {!this.state.setPassword && <h1>EEEE</h1>}
        </li>
      </div>
    );
  }
}

export default User;
