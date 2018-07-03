import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Home extends Component {

  logout() {
    localStorage.removeItem('token');
    axios.defaults.headers.common['authorization'] = '';
    window.location.reload();
  }

  render() {
    const next = 
      (<div> 
        <div>
          Logged in as {localStorage.getItem('user')}
          <button style={{marginLeft: '135px'}} onClick={this.logout}>Logout</button>
        </div>     
        <button>something</button>
        <button>something</button>
       </div>);

    return (
      <div>
        {next}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
})

export default connect(mapStateToProps)(Home);
