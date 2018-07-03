import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {CLEAR_LOG_MESSAGES} from '../../actions/types';
import {register} from '../../utils/logInSignUp'; 
import {connect} from 'react-redux';
import {loginUser} from '../../actions/userActions';
import store from '../../store';
import '../../App.css';

class Signup extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      success: false
    }
    this.insertField = this.insertField.bind(this);
  }


  insertField = field =>  e => {
    this.setState({[field]: e.target.value});
  }

  onSubmit = async e => {
    e.preventDefault();
    const {username, password} = this.state; 
    this.props.loginUser('signup', {username, password});
  }

  componentWillMount() {
    store.dispatch({
      type: CLEAR_LOG_MESSAGES
    })
  }

  render() {
    console.log(store.getState());
      return (
      <div>
          <form className="LoginForm" onSubmit={this.onSubmit}>
            <input type="text" placeholder="Username" value={this.state.username} onChange={this.insertField('username')} />
            <input type="password" value={this.state.password} placeholder ="Password" onChange={this.insertField('password')} />
            <input type="submit" value="Sign up"/>
            <div style={{marginTop: '15px',textAlign: 'left', color: 'red'}}> {this.props.logInMessages.map((message, i) => (<p key={i}>*{message}*</p>))}</div>
          </form>
         </div>
    )
  };
}


const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  logInMessages: state.user.logInMessages
});

export default connect(mapStateToProps , {loginUser})(Signup);

