interface PlayPauseProps {
  handlePause: () => void;
  handlePlay: () => void;
  isPlaying: boolean;
  activeSong: any;
  title: any;
}

import { Play } from '../assets/icons/controls';

const PlayPause = ({
  handlePause,
  handlePlay,
  isPlaying,
  activeSong,
  title,
}: PlayPauseProps) => {
  return isPlaying && activeSong?.title === title ? (
    // TODO  Change to Pause Icon
    <button className="w-[35px] h-[35px] stroke-light" onClick={handlePause}>
      <Play />
    </button>
  ) : (
    <button className="w-[35px] h-[35px]" onClick={handlePlay}>
      <Play />
    </button>
  );
};

export default PlayPause;
