import Tabs from './component/Tab';
import Gallery from './component/Gallery';
import './index.css'

const App = () => {
  return (
    <div className="min-h-screen  bg-gray-900 text-white flex flex-col items-center justify-center py-0">
      {/* <h1 className="text-3xl mb-6 max-w-[780px]">Sample</h1> */}
      <Tabs />
      <div className='custom-div' ></div>
      <Gallery />
      <br />
      <div className='custom-di' ></div>
      <br />
    </div>
  );
};

export default App;
