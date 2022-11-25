import React, { Component } from 'react';

// Component
import Header from './components/Header';
import MainImage from './components/MainImage';
import MyBtn from './components/MyBtn';
import NewsItem from './components/NewsItem';
import FooterItem from './components/FooterItem';
import BurgerMenu from './components/BurgerMenu';
import Background from './components/Background';

// Assets
import mainImage from './assets/images/image-web-3-desktop.jpg';
import footerItem1 from './assets/images/image-retro-pcs.jpg';
import footerItem2 from './assets/images/image-top-laptops.jpg';
import footerItem3 from './assets/images/image-gaming-growth.jpg';

// Types

interface AppTypes {
  burgerIsOpen: boolean;
}

class App extends Component<any, AppTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      burgerIsOpen: false,
    };
    this.updateCurrentOpen = this.updateCurrentOpen.bind(this);
  }

  updateCurrentOpen() {
    this.setState({
      burgerIsOpen: !this.state.burgerIsOpen,
    });
  }

  render() {
    return (
      <div className="overflow-x-hidden container mx-auto table:p-[0px] p-[10px] table:pb-[30px] table:pt-[80px] pt-[30px] relative">
        <Header changeBurger={this.updateCurrentOpen} />
        <main className="flex table:flex-row flex-col gap-[30px]">
          <div className="table:basis-[68%] flex flex-col justify-between">
            <MainImage mainImageLink={mainImage} />
            <div className="flex table:flex-row flex-col justify-between gap-[30px] mt-[30px]">
              <div className="table:basis-1/2">
                <h2 className="text-[black] font-bold text-[46px]">
                  The Bright Future of Web 3.0?
                </h2>
              </div>
              <div className="table:basis-1/2 flex flex-col justify-between">
                <p className="text-stone-800 mb-[15px]">
                  We dive into the next evolution of the web that claims to put the power of the
                  platforms back into the hands of the people. but is it really fulfilling its
                  promise?
                </p>
                <div>
                  <MyBtn buttonTitle="READ MORE" />
                </div>
              </div>
            </div>
          </div>
          <div className="table:basis-[32%] bg-slate-800 p-[40px]">
            <h2 className="text-[36px] font-bold text-lime-500 mb-[30px]">New</h2>
            <div className="flex flex-col justify-between">
              <NewsItem
                mainTitle="Hydrogen VS Electric Cars"
                description="will hydrogen-fueled cars ever catch up to EVs?"
                bottomLine={true}
              />
              <NewsItem
                mainTitle="The Downsides of AI Artistry"
                description="What are the possible adverse effects of on-demand AI image generation?"
                bottomLine={true}
              />
              <NewsItem
                mainTitle="Is VC Funding Drying Up?"
                description="Private funding by VC firms is down 50% YOY. We take a look at what that means"
                bottomLine={false}
              />
            </div>
          </div>
        </main>
        <footer className="mt-[100px] flex items-center gap-[40px] flex-wrap bigScreen:flex-nowrap  bigScreen:p-0 ">
          <FooterItem
            imageUrl={footerItem1}
            numberId="01"
            itemTitle="Reviving Retro PCs"
            description="What happens when old PCs are given modern upgrades?"
          />
          <FooterItem
            imageUrl={footerItem2}
            numberId="02"
            itemTitle="Top 10 Laptops of 2022"
            description="Our best picks for various needs and budgets"
          />
          <FooterItem
            imageUrl={footerItem3}
            numberId="03"
            itemTitle="The Growth of Gaming"
            description="How the pandemic has sparked fresh opportunities."
          />
        </footer>
        <div>
          <div className="flex mt-[40px] items-center table:flex-row flex-col justify-center gap-[10px] text-[28px]">
            <p>Challenge by</p>
            <a className="font-bold text-purple-700" href="https://www.frontendmentor.io/">
              FrontendMentor.io
            </a>
            <p>Coded by</p>
            <a className="font-bold text-purple-700" href="https://github.com/bedena2000">
              bedena2000
            </a>
          </div>
        </div>
        <BurgerMenu burgerProps={this.state.burgerIsOpen} updateBurger={this.updateCurrentOpen} />
        {this.state.burgerIsOpen ? <Background burgerClose={this.updateCurrentOpen} /> : null}
      </div>
    );
  }
}

export default App;
