import React, { Component } from 'react';

import burgerMenuIcon2 from '../assets/images/icon-menu-close.svg';

// Types

interface burgerPropsTypes {
  burgerProps: boolean;
  updateBurger: () => void;
}

class BurgerMenu extends Component<burgerPropsTypes> {
  render() {
    return (
      <div
        className={`bg-white w-[70%] ${
          this.props.burgerProps ? 'translate-x-[0%]' : 'translate-x-[10000%]'
        } h-full absolute top-[0px] right-[0px] p-[30px] z-[100]`}>
        <div className="flex justify-end">
          <img
            onClick={this.props.updateBurger}
            className="cursor-pointer"
            src={burgerMenuIcon2}
            alt="closeIcon"
          />
        </div>
        <div className="flex flex-col gap-[30px] text-[18px] text-black mt-[30px]">
          <p className="cursor-pointer hover:text-zinc-500 ease-in">Home</p>
          <p className="cursor-pointer hover:text-zinc-500 ease-in">New</p>
          <p className="cursor-pointer hover:text-zinc-500 ease-in">Popular</p>
          <p className="cursor-pointer hover:text-zinc-500 ease-in">Trending</p>
          <p className="cursor-pointer hover:text-zinc-500 ease-in">Categories</p>
        </div>
      </div>
    );
  }
}

export default BurgerMenu;
