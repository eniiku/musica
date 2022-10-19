export const Track = ({ activeSong }: any) => {
  return (
    <div className="flex items-center">
      <img
        src={activeSong?.images?.coverart}
        alt={`coverart for  ${activeSong?.title}`}
        className="h-[50px] w-[50px]"
      />
      <div className="text-white ml-2 w-1/2 ">
        <h1 className="text-sm font-bold truncate">
          {activeSong?.title ? activeSong?.title : 'No active Song'}
        </h1>
        <p className="text-[10px] opacity-50 truncate">
          {activeSong?.subtitle ? activeSong?.subtitle : ''}
        </p>
      </div>
    </div>
  );
};
