const BottomDock = () => {
  return (
    <div className="flex-[1] flex gap-2 p-2 pt-0">
      <div className="glass h-full flex-[1] flex flex-col">
        <div className="flex-[1] max-h-[35px] flex items-center px-2">
          <p className="text-lg text-blue-400">CPU</p>
        </div>
        <div className="flex-[1]"></div>
      </div>
      <div className="glass h-full flex-[1] flex flex-col">
        <div className="flex-[1] max-h-[35px] flex items-center px-2">
          <p className="text-lg text-blue-400">RAM</p>
        </div>
        <div className="flex-[1]"></div>
      </div>
      <div className="glass h-full flex-[1] flex flex-col">
        <div className="flex-[1] max-h-[35px] flex items-center px-2">
          <p className="text-lg font text-blue-400">STORAGE</p>
        </div>
        <div className="flex-[1]"></div>
      </div>
    </div>
  );
};

export default BottomDock;
