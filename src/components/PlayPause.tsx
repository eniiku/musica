interface PlayPauseProps {
  isPlaying: boolean;
  activeSong: any;
  title: any;
}

import { Pause, Play } from '../assets/icons/controls';

const PlayPause = ({ isPlaying, activeSong, title }: PlayPauseProps) => {
  return isPlaying && activeSong?.title === title ? (
    <button className="w-[30px] h-[30px]">
      <Pause />
    </button>
  ) : (
    <button className="w-[30px] h-[30px]">
      <Play />
    </button>
  );
};

export default PlayPause;
