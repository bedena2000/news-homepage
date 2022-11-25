import React, { Component } from 'react';

interface MyBtnPropsType {
  buttonTitle: string;
}

class MyBtn extends Component<MyBtnPropsType> {
  render() {
    return (
      <button className="w-[200px] p-[10px] transition-all ease-in hover:bg-gray-800 bg-orange-900 text-white tracking-widest">
        {this.props.buttonTitle}
      </button>
    );
  }
}

export default MyBtn;
