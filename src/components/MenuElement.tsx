import React, { Component } from 'react';

interface MenuElementProps {
  menuTitle: string;
}

class MenuElement extends Component<MenuElementProps> {
  render() {
    return (
      <li className="text-[16px] text-slate-600 cursor-pointer hover:text-amber-500 ease-in">
        {this.props.menuTitle}
      </li>
    );
  }
}

export default MenuElement;
