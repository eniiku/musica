import { Link } from 'react-router-dom';
import { Play } from '../assets/icons/controls';

const Collections = () => {
  return (
    <div className="min-h-screen text-light px-6">
      <aside
        className="w-full flex items-center justify-start mt-4 mb-12
        lg:mt-2 lg:mb-4"
      >
        <button
          className="px-4 py-2 rounded-full text-sm w-[178px] border 
            border-light border-opacity-25 text-light text-opacity-25 mr-[14px]
              lg:w-fit lg:px-5"
        >
          My collection
        </button>
        <button
          className="px-4 py-2 rounded-full text-sm w-[178px] border 
            border-light border-opacity-25 text-light text-opacity-25
              lg:w-fit lg:px-5 "
        >
          Likes
        </button>
      </aside>
      <main className="auto-grid w-full">
        {/* TODO fetch data  */}
        {[
          {
            name: 'Limits',
            artist: 'John watts',
            likes: '2.3m likes',
            coverArt: '#',
          },
          {
            name: 'Limits',
            artist: 'John watts',
            likes: '2.3m likes',
            coverArt: '#',
          },

          {
            name: 'Limits',
            artist: 'John watts',
            likes: '2.3m likes',
            coverArt: '#',
          },
        ].map((playlist, index) => (
          <Link
            to={`collections/top-charts/song`}
            key={`${playlist.name}+${index}`}
            className="w-fit"
          >
            {/* TODO use image instead of bg-color */}

            <div
              className="w-full bg-blue-300 h-[230px] my-6 rounded-2xl flex
                items-end justify-between border border-light border-opacity-5 p-5
                md:w-[210px]"
            >
              <div>
                <h2 className="text-2xl">{playlist.name}</h2>

                <h3 className="text-[10px] opacity-75">{playlist.artist}</h3>

                <h3 className="text-sm mt-6 md:hidden">{playlist.likes}</h3>
              </div>

              <button className="w-[40px] h-[40px] md:hidden">
                <Play />
              </button>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Collections;
