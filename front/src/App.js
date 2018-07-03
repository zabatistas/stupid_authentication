import React, { Component } from 'react';
import Main from './components/Main';
import './App.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {USER_LOGIN} from './actions/types';
import store from './store';

class App extends Component {
  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
    }
    axios.interceptors.response.use(null,  error => {
      if (error.response.status === 400) {
        return error.response
      } else if(error.response.status === 403) {
        localStorage.removeItem('token');
        store.dispatch({type:USER_LOGIN, payload: ['Session expired']});
        return {data: []}
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;