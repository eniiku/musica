export const AlbumCard = ({
  coverImage,
  title,
  artist,
}: {
  coverImage: string;
  title: string;
  artist: string;
}) => {
  return (
    <div>
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
