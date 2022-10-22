import { useState } from 'react';
import { Favorite } from '../assets/icons';

interface ListViewCardProps {
  coverImage: string;
  title: string;
  artist: string;
  time: string;
  favorite: boolean;
  loadState: any;
}

export const ListViewCard = ({
  coverImage,
  title,
  artist,
  time,
  favorite,
  loadState,
}: ListViewCardProps) => {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleOnClick = () => setIsFavorite((prev: boolean) => !prev);

  return loadState ? (
    <div
      className="flex flex-none items-start justify-between rounded-2xl p-4
    bg-dark-alt w-[320px] md:min-w-[420px] md:items-center cursor-pointer"
    >
      <div className="md:flex items-center">
        <div
          className="w-[110px] h-[100px] rounded-xl mb-4  
          md:w-[64px] md:h-[64px] flex-none bg-white bg-opacity-50 animate-pulse"
        />
        <div className="md:ml-4 md:pr-6 md:min-h-[64px] w-full">
          <h3 className="text-lg w-full bg-white bg-opacity-50 h-6 animate-pulse"></h3>
          <p className="my-4 md:my-1 w-full bg-white bg-opacity-50 h-3 animate-pulse"></p>
          <h4 className="w-full bg-white bg-opacity-50 h-3 animate-pulse"></h4>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="flex flex-none items-start justify-between rounded-2xl p-4
      bg-dark-alt w-[320px] md:min-w-[420px] md:items-center cursor-pointer"
    >
      <div className="md:flex items-center">
        <img
          src={coverImage}
          alt={`cover art for ${title}`}
          role="presentation"
          className="w-[110px] h-[100px] rounded-xl mb-4  
            md:w-[64px] md:h-[64px] flex-none"
        />
        <div className="md:ml-4 md:pr-6 md:min-h-[64px]">
          <h3 className="text-lg">{title}</h3>
          <p className="opacity-50 text-xs my-4 md:my-1">{artist}</p>
          <h4 className="text-sm md:text-xs">{time}</h4>
        </div>
      </div>
      <div
        className={
          isFavorite
            ? `bg-red-600 w-[37px] h-[37px] border-[1px] border-white 
          border-opacity-10 rounded-full text-center`
            : `bg-none w-[37px] h-[37px] border-[1px] border-white 
          border-opacity-10 rounded-full text-center`
        }
        onClick={handleOnClick}
      >
        <Favorite className="w-[18px] h-[18px] inline-block" />
      </div>
    </div>
  );
};
