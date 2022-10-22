//
// *       CONTENT
// ? Imports                  Line 9
// ? Hero Section             Line 15
// ? Top charts Section       Line 60
// ? Other sections           Line ...
// ? Default Export           Line 61

// * IMPORTS

import { useEffect, useState } from 'react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AlbumCard, ListViewCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/musicApi';

import 'swiper/css';
import 'swiper/css/free-mode';
import { Like } from '../assets/icons';

// * HERO SECTION

const heroHeight: number = 380;

const Hero = () => (
  <section
    className={`bg-blue-400 h-[500px] md:h-[${heroHeight}px] w-full rounded-3xl
        flex flex-col flex-none justify-between p-8 text-left md:w-full lg:w-[680px]
        `}
  >
    <p className="text-xs">Curated playlist</p>

    <article className="mt-32 md:mt-0">
      <h3 className="font-bold text-4xl mb-2">R & B Hits</h3>

      <p className="text-sm md:w-[280px]">
        All mine, Lie again, Petty call me everyday, Out of time, No love, Bad
        habit, and so much more
      </p>
    </article>

    <div className="flex justify-start items-center">
      <div className="relative">
        {[1, 2, 3, 4, 5].map((num, index) => (
          <div
            key={num}
            className={`w-[calc(1.65rem_+_2px)] h-[calc(1.75rem_+_2px)] md:w-[calc(1.25rem_+_2px)] md:h-[calc(1.25rem_+_2px)] 
            rounded-full bg-black inline-block transform -translate-x-[${
              num * index
            }px] border-2 border-blue-400 md:text-sm`}
          >
            {num}
          </div>
        ))}
      </div>

      <button className="mx-[18px]">
        <Like className="w-[22px] h-[22px] md:w-[16px] md:h-[16px]" />
      </button>

      <p className="text-2xl md:text-base">33K Likes</p>
    </div>
  </section>
);

// * TOP CHARTS

interface DataProps {
  songData: any;
  loadState: boolean;
  error: any;
}

const TopCharts = ({ songData, loadState, error }: DataProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // * handy function to set direction of Swiper
  // * Works by watching resize event for change in size
  // * updates state as per change, and ta da!

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <section
      className={`mt-12 lg:mt-0 lg:ml-12 lg:h-[${heroHeight}px] overflow-hidden`}
    >
      <h1 className="font-bold text-xl mb-5 md:mb-0">Top charts</h1>

      {error?.status === 'FETCH_ERROR' ? (
        <h1 className="text-lg font-white mt-6">
          Uh! Oh! It seems something went wrong
        </h1>
      ) : (
        <Swiper
          slidesPerView="auto"
          spaceBetween={12}
          centeredSlides
          centeredSlidesBounds
          freeMode={true}
          modules={[FreeMode]}
          direction={windowWidth > 1023 ? 'vertical' : 'horizontal'}
          className="mySwiper "
        >
          {songData?.map((song: any) => (
            <SwiperSlide key={song.key.toString()} className="w-fit h-fit">
              <ListViewCard
                coverImage={song.images?.coverart}
                title={song.title}
                artist={song.subtitle}
                time={song.artists?.adamid}
                favorite={false}
                loadState={loadState}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

// * NEW RELEASES

const NewReleases = ({ songData, loadState, error }: DataProps) => (
  <section className="mt-12">
    <h1 className="font-bold text-xl mb-5">New releases</h1>

    {error?.status === 'FETCH_ERROR' ? (
      <h1 className="text-lg font-white">
        Uh! Oh! It seems something went wrong
      </h1>
    ) : (
      <Swiper slidesPerView={'auto'} spaceBetween={30} className="mySwiper">
        {songData?.map((song: any) => (
          <SwiperSlide key={song.key.toString()} className="w-fit">
            <AlbumCard
              coverImage={song.images?.coverart}
              title={song.title}
              artist={song.subtitle}
              loadState={loadState}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    )}
  </section>
);

// * DEFAULT EXPORT

const Home = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data);
  if (error) console.log(error);

  return (
    <main className="px-6 text-white min-h-screen pb-16">
      <div className="lg:flex">
        <Hero />
        <TopCharts songData={data} loadState={isFetching} error={error} />
      </div>
      <NewReleases songData={data} loadState={isFetching} error={error} />
    </main>
  );
};

export default Home;
