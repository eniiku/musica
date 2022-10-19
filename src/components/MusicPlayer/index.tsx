import nextIcon from '../../assets/icons/controls/forward.svg';
import playIcon from '../../assets/icons/controls/play.svg';
import previousIcon from '../../assets/icons/controls/previous.svg';
import repeatIcon from '../../assets/icons/controls/repeat.svg';
import shuffleIcon from '../../assets/icons/controls/shuffle.svg';
import volumeIcon from '../../assets/icons/controls/volume.svg';

const MusicPlayer = () => {
  return (
    <div
      className="w-screen h-[105px] backdrop-blur-xl flex items-center
      justify-around px-12 py-8 bg-dark bg-opacity-50"
    >
      <div className="flex items-center">
        <img src="#" alt="alt" className="h-[50px] w-[50px]" />
        <div className="text-white ml-2">
          <h1 className="text-sm font-bold">Seasons in</h1>
          <p className="text-[10px] opacity-50">James</p>
        </div>
      </div>
      {/* ? controls */}
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-8 ml-20">
          {[shuffleIcon, previousIcon].map((icon) => (
            <img
              key={icon.toString()}
              src={icon}
              role="presentation"
              className="mr-10"
              width={16}
            />
          ))}
          <img
            src={playIcon}
            role="presentation"
            className="mr-10"
            width={25}
          />
          {[nextIcon, repeatIcon].map((icon) => (
            <img
              key={icon.toString()}
              src={icon}
              role="presentation"
              className="mr-10"
              width={16}
            />
          ))}
        </div>
        <input
          type="range"
          step="any"
          value={25}
          min={0}
          max={100}
          onInput={() => console.log('yay!')}
          className="md:block w-[750px] h-1 rounded-xl bg-white bg-opacity-5
            text-secondary border-none"
        />
      </div>
      {/* ? volume */}
      <div className="flex items-center">
        <img
          src={volumeIcon}
          role="presentation"
          className="w-[18px] h-[18px]"
        />
        <input
          type="range"
          step="any"
          value={0.4}
          min={0}
          max={1}
          onChange={() => console.log('yay!')}
          className="w-[160px] h-1 ml-2"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
