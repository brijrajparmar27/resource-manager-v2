import './App.css';
import BottomDock from './components/bottomDock/BottomDock';
import TopDock from './components/topDock/TopDock';

function App() {
  return (
    <div className="h-full w-full glass flex flex-col">
      <div className=" w-full flex-1 max-h-[30px] draggable flex items-center">
        <div className="flex gap-1 h-full items-center px-3">
          <div className="traffic-light bg-red-500 undraggable"></div>
          <div className="traffic-light bg-yellow-500 undraggable"></div>
          <div className="traffic-light bg-green-500 undraggable"></div>
        </div>
      </div>
      <div className="w-full flex-1 flex flex-col">
        <TopDock />
        <BottomDock />
      </div>
    </div>
  );
}

export default App;
