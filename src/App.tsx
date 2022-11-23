// Component
import Header from './components/Header';
import MainImage from './components/MainImage';
import MyBtn from './components/MyBtn';

// Assets
import mainImage from './assets/images/image-web-3-desktop.jpg';

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <main className="flex flex-row gap-[30px]">
        <div className="table:basis-3/4">
          <MainImage mainImageLink={mainImage} />
          <div className="flex justify-between gap-[30px] mt-[30px]">
            <div className="table:basis-1/2">
              <h2 className="text-[black] font-bold text-[46px]">The Bright Future of Web 3.0?</h2>
            </div>
            <div className="table:basis-1/2 flex flex-col justify-between">
              <p className="text-stone-800">
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
        <div className="table:basis-1/4"></div>
      </main>
    </div>
  );
}

export default App;
