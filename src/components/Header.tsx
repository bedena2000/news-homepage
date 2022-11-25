import React, { Component } from 'react';
import './Header.css';

// Components
import MenuElement from './MenuElement';
import BurgerMenuIcons from './BurgerMenuIcons';

// Assets
import logo from '../assets/images/logo.svg';

interface HeaderPropsTypes {
  changeBurger: () => void;
}

class Header extends Component<HeaderPropsTypes> {
  render() {
    return (
      <header className="mb-[60px]">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="MainLogo" />
          </div>
          <ul className="myBurgerMenu">
            <MenuElement menuTitle="Home" />
            <MenuElement menuTitle="New" />
            <MenuElement menuTitle="Popular" />
            <MenuElement menuTitle="Trending" />
            <MenuElement menuTitle="Categories" />
          </ul>
          <BurgerMenuIcons changeBurger={this.props.changeBurger} />
        </div>
      </header>
    );
  }
}

export default Header;
