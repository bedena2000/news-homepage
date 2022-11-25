import React, { Component } from 'react';

import burgerMenuIcon from '../assets/images/icon-menu.svg';

interface BurgerPropsTypes {
  changeBurger: () => void;
}

class BurgerMenuIcons extends Component<BurgerPropsTypes> {
  constructor(props: any) {
    super(props);
    this.changeIcon = this.changeIcon.bind(this);
  }

  changeIcon(): void {
    this.props.changeBurger();
  }

  render() {
    return (
      <div className="table:hidden block cursor-pointer" onClick={this.changeIcon}>
        <img src={burgerMenuIcon} alt="burgerMenuLogo" />
      </div>
    );
  }
}

export default BurgerMenuIcons;
