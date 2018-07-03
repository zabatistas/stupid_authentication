import React, { Component } from 'react';
import axios from 'axios';
import User from '../User';

class UserList extends Component {

   constructor() {
    super();
    this.state = {
      userList: [],
      isToggled: false
    }
    this.loadUsers = this.loadUsers.bind(this);
  }

  async loadUsers() {
    const res = await axios.get('http://localhost:4000/users');
    console.log('gettin');
    this.setState(prevState => (
      { 
        userList: res.data,
        isToggled: !prevState.isToggled
      }
    ));
  }

  render() {
    const users = this.state.userList;
    const list = users.map(user => <User key={user._id} user={user} onDelete={this.deleteUser} />); 
    return (
      <div>
        <button onClick={this.loadUsers}>{this.state.isToggled ? 'Hide User list' : 'Show user list'}</button>
        <ul>
          {this.state.isToggled && list}
        </ul>
      </div>
    );
  }
}

export default UserList;
