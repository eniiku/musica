import volumeIcon from '../../assets/icons/controls/volume.svg';

export const Volume = () => {
  return (
    <div className="flex items-center">
      <img src={volumeIcon} role="presentation" className="w-[18px] h-[18px]" />
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
  );
};
