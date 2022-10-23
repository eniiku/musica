import { useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import PlayPause from './PlayPause';

interface AlbumCardProps {
  coverImage: string;
  title: string;
  artist: string;
  loadState: boolean;
  isPlaying: boolean;
  activeSong: any;
  song: any;
  songData: any;
  i: number;
}

export const AlbumCard = ({
  coverImage,
  title,
  artist,
  loadState,
  isPlaying,
  activeSong,
  song,
  songData,
  i,
}: AlbumCardProps) => {
  const dispatch = useDispatch();

  const handlePause = () => {
    dispatch(playPause(false));
  };

  const handlePlay = () => {
    dispatch(setActiveSong({ song, songData, i }));
    dispatch(playPause(true));
  };

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
    <div className="cursor-pointer relative group">
      <div>
        <img
          src={coverImage}
          alt={`Cover art for ${title}`}
          className="w-[150px] h-[150px] rounded-3xl"
        />
        <h5 className="text-xs my-2 text-left w-[150px]">{title}</h5>
        <h5 className="opacity-50 text-xs w-[150px]">{artist}</h5>
      </div>
      <div
        className={`absolute inset-0 justify-center items-center bg-black
        bg-opacity-50 group-hover:flex ${
          activeSong?.title === song.title
            ? 'flex bg-black bg-opacity-70'
            : 'hidden'
        }`}
      >
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePause={handlePause}
          handlePlay={handlePlay}
          title={title}
        />
      </div>
    </div>
  );
};
