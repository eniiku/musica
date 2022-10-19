export const AlbumCard = ({
  coverImage,
  title,
  artist,
  loadState,
}: {
  coverImage: string;
  title: string;
  artist: string;
  loadState: any;
}) => {
  return loadState ? (
    <div className="cursor-pointer">
      <div
        className="w-[150px] h-[150px] rounded-3xl bg-white opacity-50
        animate-pulse"
      />
      <h5
        className="text-xs my-2 text-left w-[150px] bg-white
        bg-opacity-50 h-3 animate-pulse"
      ></h5>
      <h5
        className="opacity-50 text-xs w-[150px] bg-white h-3
        bg-opacity-50 animate-pulse"
      ></h5>
    </div>
  ) : (
    <div className="cursor-pointer">
      <img
        src={coverImage}
        alt={`Cover art for ${title}`}
        className="w-[150px] h-[150px] rounded-3xl"
      />
      <h5 className="text-xs my-2 text-left w-[150px]">{title}</h5>
      <h5 className="opacity-50 text-xs w-[150px]">{artist}</h5>
    </div>
  );
};
