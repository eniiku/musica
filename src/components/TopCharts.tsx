import { Collection, Like, More } from '../assets/icons';
import { Play } from '../assets/icons/controls';

const TopCharts = () => {
  return (
    <div className="px-6 mt-4 text-white min-h-screen">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="w-[350px] h-[290px] bg-indigo-600 rounded-2xl ">
          image
        </div>

        <div className="text-left lg:ml-8">
          <h2 className="font-bold text-[35px] text-[#A4C7C6] mt-6">
            Tomorrow's Tunes
          </h2>

          <p className="text-sm w-[640px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>

          <p className="text-sm mt-2 mb-6">
            64 songs-<span>16 hrs+</span>
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: <Play />, text: 'Play all' },
              { icon: <Collection className="" />, text: 'Add to collection' },
              {
                icon: <Like className="w-4 h-4 fill-[#E5524A]" />,
                text: 'Like',
              },
            ].map((icon) => (
              <button
                key={icon.text}
                className="bg-white bg-opacity-5 py-[10px] px-5 flex items-center gap-[10px]
                  rounded-full"
              >
                {icon.icon}

                <p className="text-xs">{icon.text}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="my-8 ">
        {[
          {
            title: 'Let me love you- Krisx',
            type: 'Single',
            duration: '4:17',
            img: '',
          },
          {
            title: 'Let me love you- Krisx',
            type: 'Single',
            duration: '3:27',
            img: '',
          },
        ].map((song) => (
          <div
            key={song.duration}
            className="w-full bg-[#33373B] p-2 rounded-md flex items-center justify-between
              mt-4"
          >
            {/* TODO change div for image */}
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-md bg-amber-700"></div>

              <div>
                <h2 className="text-xs">{song.title}</h2>

                <p className="text-[10px] mt-1">{song.type}</p>
              </div>
            </div>

            <div className="flex flex-col gap-1 items-end">
              <button>
                <More className="w-[14px] h-[14px]" />
              </button>

              <p className="text-xs">{song.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
