import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  nextSong,
  playPause,
  prevSong,
} from '../../redux/features/music_player/playerSlice';
import { Controls, Player, Track, Volume } from './components';

const MusicPlayer = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useSelector((state: any) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };

  return (
    <div
      className="w-screen h-[90px] md:h-[105px] backdrop-blur-xl flex items-center
      justify-around px-12 py-8 bg-dark bg-opacity-50"
    >
      <Track activeSong={activeSong} />

      <Controls
        isPlaying={isPlaying}
        repeat={repeat}
        setRepeat={setRepeat}
        shuffle={shuffle}
        setShuffle={setShuffle}
        currentSongs={currentSongs}
        handlePlayPause={handlePlayPause}
        handlePrevSong={handlePrevSong}
        handleNextSong={handleNextSong}
        value={appTime}
        min="0"
        max={duration}
        onInput={(event: any) => setSeekTime(event.target.value)}
      />
      <Player
        activeSong={activeSong}
        volume={volume}
        isPlaying={isPlaying}
        seekTime={seekTime}
        repeat={repeat}
        currentIndex={currentIndex}
        onEnded={handleNextSong}
        onTimeUpdate={(event: any) => setAppTime(event.target.currentTime)}
        onLoadedData={(event: any) => setDuration(event.target.duration)}
      />

      <Volume
        value={volume}
        min="0"
        max="1"
        onChange={(event: any) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
};

export default MusicPlayer;
