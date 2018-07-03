import React, { Component } from 'react';
import './styles.css';

class MenuItem extends Component {

  render() {
    const {name, price, ingredients, _id} = this.props.item;
    return (
      <div className="menu-item">
        <div className="menu-item-name">{name}</div>
        <div className="menu-item-price">${price}</div>
        <div className="menu-item-description">{ingredients.join()}</div>
      </div>
    );
  }
}

export default MenuItem;