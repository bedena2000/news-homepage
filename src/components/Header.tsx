import React, { Component } from 'react';

// Components
import MenuElement from './MenuElement';

// Assets
import logo from '../assets/images/logo.svg';
import burgerMenuIcon from '../assets/images/icon-menu.svg';

class Header extends Component {
  render() {
    return (
      <header className="mb-[60px]">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="MainLogo" />
          </div>
          <ul className="table:flex table:gap-[20px] table:items-center hidden">
            <MenuElement menuTitle="Home" />
            <MenuElement menuTitle="New" />
            <MenuElement menuTitle="Popular" />
            <MenuElement menuTitle="Trending" />
            <MenuElement menuTitle="Categories" />
          </ul>
          <div className="table:hidden cursor-pointer">
            <img src={burgerMenuIcon} alt="burgerMenuLogo" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
