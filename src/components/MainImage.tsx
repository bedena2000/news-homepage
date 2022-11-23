import React, { Component } from 'react';

interface MainImageProps {
  mainImageLink: string;
}

class MainImage extends Component<MainImageProps> {
  render() {
    return <img src={this.props.mainImageLink} alt="mainImage" />;
  }
}

export default MainImage;
