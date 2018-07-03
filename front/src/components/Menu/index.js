import React, { Component } from 'react';
import axios from 'axios';
import MenuItem from '../MenuItem';
import {connect} from 'react-redux';
import {getMenu} from '../../actions/menuActions';
import {Redirect} from 'react-router-dom';
import store from '../../store'
import './styles.css'

class Menu extends Component {

  componentDidMount() {
    this.props.getMenu();
  }

  render() {
    const {menu, isLoggedIn} = this.props;
    return (
      <div className="menu-body">
        <div className="menu-section">
          <h2 className="menu-section-title">MENU</h2>
            {menu.map(item => <MenuItem key={item._id} item={item} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu.menu,
  isLoggedIn: state.user.isLoggedIn
})

export default connect(mapStateToProps, {getMenu})(Menu);



// <div class="menu-body">
  
//     <!-- Section starts: Appetizers -->
//     <div class="menu-section">

//       <h2 class="menu-section-title">MAIN COURSE</h2>
    
//       <!-- Item starts -->
//       <div class="menu-item">
//         <div class="menu-item-name">
//           Delicious Dish
//         </div>
        
//         <div class="menu-item-price">
//           $50
//         </div>

//         <div class="menu-item-description">
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
//         </div>

//       </div>
//       <!-- Item ends -->

//       <!-- Item starts -->
//       <div class="menu-item">

//         <div class="menu-item-name">
//           Delicious Dish
//         </div>
        
//         <div class="menu-item-price">
//           $50
//         </div>

//         <div class="menu-item-description">
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
//         </div>
        
//       </div>
//       <!-- Item ends -->

//       <!-- Item starts -->
//       <div class="menu-item">

//         <div class="menu-item-name">
//           Delicious Dish
//         </div>

//         <div class="menu-item-price">
//           $30
//         </div>

//         <div class="menu-item-description">
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
//         </div>

//       </div>
//       <!-- Item ends -->

//       <!-- Item starts -->
//       <div class="menu-item">

//         <div class="menu-item-name">
//           Delicious Dish
//         </div>

//         <div class="menu-item-price">
//           $30
//         </div>

//         <div class="menu-item-description">
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
//         </div>

//       </div>
//       <!-- Item ends -->
      
//     </div>
//     <!-- Section ends: Appetizers -->
    
//     <!-- Section starts: Drinks -->
//     <div class="menu-section">

//       <h2 class="menu-section-title">DRINKS</h2>
    
//       <!-- Item starts -->
//       <div class="menu-item">

//         <div class="menu-item-name">
//           Tasty Drink
//         </div>

//         <div class="menu-item-price">
//           $30
//         </div>

//         <div class="menu-item-description">
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
//         </div>

//       </div>
//       <!-- Item ends -->

//       <!-- Item starts -->
//       <div class="menu-item">

//         <div class="menu-item-name">
//           Tasty Drink
//         </div>

//         <div class="menu-item-price">
//           $30
//         </div>

//         <div class="menu-item-description">
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
//         </div>

//       </div>
//       <!-- Item ends -->

//       <!-- Item starts -->
//       <div class="menu-item">

//         <div class="menu-item-name">
//           Tasty Drink
//         </div>

//         <div class="menu-item-price">
//           $30
//         </div>

//         <div class="menu-item-description">
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
//         </div>

//       </div>
//       <!-- Item ends -->

//       <!-- Item starts -->
//       <div class="menu-item">

//         <div class="menu-item-name">
//           Tasty Drink
//         </div>

//         <div class="menu-item-price">
//           $30
//         </div>

//         <div class="menu-item-description">
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
//         </div>

//       </div>
//       <!-- Item ends -->
      
//     </div>
//     <!-- Section ends: Drinks -->
    
//   </div>