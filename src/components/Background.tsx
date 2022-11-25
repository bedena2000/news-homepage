import React, { Component } from 'react';

interface BackgroundPropsTypes {
  burgerClose: () => void;
}

class Background extends Component<BackgroundPropsTypes> {
  render() {
    return (
      <div
        onClick={this.props.burgerClose}
        className="bg-black/50 z-[99] w-full h-full absolute top-0 left-0 bottom-0 right-0"></div>
    );
  }
}

export default Background;
