import {
  Next,
  Play,
  Previous,
  Repeat,
  Shuffle,
} from '../../../assets/icons/controls';

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

        <button
          onClick={() => setShuffle((prev: any) => !prev)}
          className="mr-10  hidden lg:block"
        >
          <Shuffle color={shuffle ? 'text.secondary' : 'inherit'} />
        </button>

        {/* Logic to handle playing previous song */}

        {currentSongs?.length === 0 && (
          <button className="mr-10 hidden lg:block" onClick={handlePrevSong}>
            <Previous />
          </button>
        )}

        {/* Logic to handle PlayPause Button */}

        {isPlaying ? (
          <button onClick={handlePlayPause} className="mr-10 w-[25px]">
            <Play />
          </button>
        ) : (
          <button className="mr-10 w-[25px]" onClick={handlePlayPause}>
            <Play />
          </button>
        )}

        {/* Logic to handle play next song */}

        {currentSongs?.length === 0 && (
          <button className="lg:mr-10" onClick={handleNextSong}>
            <Next />
          </button>
        )}

        {/* Logic to repeat songs */}

        <button
          className="hidden lg:block"
          onClick={() => setRepeat((prev: any) => !prev)}
        >
          <Repeat color={repeat ? 'text.secondary' : 'inherit'} />
        </button>
      </div>
      <Seekbar value={value} min={min} max={max} onInput={onInput} />
    </div>
  );
};
