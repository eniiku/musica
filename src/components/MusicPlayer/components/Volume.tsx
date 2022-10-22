import { Volume as VolumeIcon } from '../../../assets/icons/controls';
import volumeIcon from '../../../assets/icons/controls/volume.svg';

export const Volume = ({ value, min, max, onChange }: any) => {
  return (
    <div className="hidden lg:flex lg:items-center">
      <div className="w-[18px] h-[18px]" aria-hidden="true" role="presentation">
        <VolumeIcon />
      </div>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        className="w-[160px] h-1 ml-2"
      />
    </div>
  );
};
