import React, { Component } from 'react';

interface FooterItemPropsTypes {
  imageUrl: string;
  itemTitle: string;
  numberId: string;
  description: string;
}

class FooterItem extends Component<FooterItemPropsTypes> {
  render() {
    return (
      <div className="w-full h-[200px] overflow-hidden flex gap-[20px]">
        <div className="basis-2/5">
          <img className="w-full h-full object-cover" src={this.props.imageUrl} alt="footerImage" />
        </div>
        <div className="flex basis-3/5 flex-col justify-between">
          <p className="text-[46px] text-cyan-400 font-bold">{this.props.numberId}</p>
          <p className="text-[24px] text-pink-900 font-bold">{this.props.itemTitle}</p>
          <p className="text-[20px] break-all">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default FooterItem;
