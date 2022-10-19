import nextIcon from '../../../assets/icons/controls/forward.svg';
import playIcon from '../../../assets/icons/controls/play.svg';
import previousIcon from '../../../assets/icons/controls/previous.svg';
import repeatIcon from '../../../assets/icons/controls/repeat.svg';
import shuffleIcon from '../../../assets/icons/controls/shuffle.svg';

const Seekbar = ({ value, min, max, onInput }: any) => {
  return (
    <input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onInput={onInput}
      className="hidden lg:block w-[750px] h-1 rounded-xl bg-white bg-opacity-5
            text-secondary border-none"
    />
  );
};

export const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,

  value,
  min,
  max,
  onInput,
}: any) => {
  return (
    <div className="block my-auto lg:flex flex-col items-center">
      <div className="flex items-center mb-4 ">
        {/* Logic to shuffle songs */}

        <img
          src={shuffleIcon}
          role="presentation"
          className="mr-10  hidden lg:block"
          width={16}
          color={shuffle ? 'text.secondary' : 'inherit'}
          onClick={() => setShuffle((prev: any) => !prev)}
        />

        {/* Logic to handle playing previous song */}

        {currentSongs?.length && (
          <img
            src={previousIcon}
            role="presentation"
            className="mr-10 hidden lg:block"
            width={16}
            onClick={handlePrevSong}
          />
        )}

        {/* Logic to handle PlayPause Button */}

        {isPlaying ? (
          <img
            src={playIcon}
            role="presentation"
            className="mr-10"
            width={25}
            onClick={handlePlayPause}
          />
        ) : (
          <img
            src={playIcon}
            role="presentation"
            className="mr-10"
            width={25}
            onClick={handlePlayPause}
          />
        )}

        {/* Logic to handle play next song */}

        {currentSongs?.length && (
          <img
            src={nextIcon}
            role="presentation"
            className="lg:mr-10"
            width={16}
            onClick={handleNextSong}
          />
        )}

        {/* Logic to repeat songs */}

        <img
          src={repeatIcon}
          role="presentation"
          className="hidden lg:block"
          width={16}
          color={repeat ? 'text.secondary' : 'inherit'}
          onClick={() => setRepeat((prev: any) => !prev)}
        />
      </div>
      <Seekbar value={value} min={min} max={max} onInput={onInput} />
    </div>
  );
};
