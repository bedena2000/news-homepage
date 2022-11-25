import React, { Component } from 'react';

interface NewsItemPropsTypes {
  mainTitle: string;
  description: string;
  bottomLine?: boolean;
}

class NewsItem extends Component<NewsItemPropsTypes> {
  render() {
    return (
      <div
        className={`pb-[16px] ${
          this.props.bottomLine ? 'border-b-[1px]' : ''
        } mb-[30px] text-white hover:text-lime-500 cursor-pointer`}>
        <p className="text-inherit text-[18px] mb-[12px]">{this.props.mainTitle}</p>
        <p className="text-sky-300">{this.props.description}</p>
      </div>
    );
  }
}

export default NewsItem;
