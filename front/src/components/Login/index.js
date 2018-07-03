import React, { Component } from 'react';
import axios from 'axios';
import {loginUser} from '../../actions/userActions';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {USER_LOGIN} from '../../actions/types';
import store from '../../store';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.insertField = this.insertField.bind(this);
  }

  insertField = field =>  e => {
    this.setState({[field]: e.target.value});
  }

  onSubmit = e => {
    e.preventDefault();
    const {username, password} = this.state; 
    this.props.loginUser('login', {username, password});
  }

  render() {
    console.log(store.getState());
    return (
      <div>
        {!this.props.isLoggedIn && <form className={this.props.className} onSubmit={this.onSubmit}>
          <input type="text" placeholder="Username" value={this.state.username} onChange={this.insertField('username')} />
          <input type="password" value={this.state.password} placeholder ="Password" onChange={this.insertField('password')} />
          <input type="submit" value="Login"/>
          <div style={{marginTop: '15px',textAlign: 'left', color: 'red'}}> {this.props.logInMessages.map((message, i) => (<p key={i}>*{message}*</p>))}</div>
          <h3>Not a member?</h3>
          <Link to='/signup'><input type="submit" value= "Sign Up"/></Link>
        </form>}
        {this.props.isLoggedIn && <Redirect to='/menu' />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  logInMessages: state.user.logInMessages
});

export default connect(mapStateToProps, {loginUser})(Login);
