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
import 'swiper/css';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import likeIcon from '../assets/icons/like.svg';
import { AlbumCard, ListViewCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/musicApi';

// * HERO SECTION

const heroHeight: number = 380;

const Hero = () => (
  <section
    className={`bg-blue-400 h-[500px] md:h-[${heroHeight}px] w-full rounded-3xl
        flex flex-col flex-none justify-between p-8 text-left md:w-[680px]
        `}
  >
    <p className="text-xs">Curated playlist</p>

    <article className="mt-52 md:mt-0">
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

      <img
        src={likeIcon}
        role="presentation"
        className="w-[22px] h-[22px] mx-[18px]
          md:w-[16px] md:h-[16px]"
      />

      <p className="text-2xl md:text-base">33K Likes</p>
    </div>
  </section>
);

// * TOP CHARTS

const TopCharts = ({ songData }: { songData: any }) => {
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
      className={`mt-12 md:mt-0 md:ml-12 md:h-[${heroHeight}px] overflow-y-hidden`}
    >
      <h1 className="font-bold text-xl mb-5 md:mb-0">Top charts</h1>

      <Swiper
        slidesPerView="auto"
        spaceBetween={12}
        centeredSlides
        centeredSlidesBounds
        freeMode={true}
        modules={[FreeMode]}
        direction={windowWidth > 767 ? 'vertical' : 'horizontal'}
        className="mySwiper overflow-y-hidden"
      >
        {songData?.map((song: any) => (
          <SwiperSlide className="w-fit h-fit">
            <ListViewCard
              key={song.key}
              coverImage={song.images?.coverart}
              title={song.title}
              artist={song.subtitle}
              time={song.artists.adamid}
              favorite={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

// * NEW RELEASES

const NewReleases = ({ songData }: { songData: any }) => (
  <section className="mt-12">
    <h1 className="font-bold text-xl mb-5">New releases</h1>

    <Swiper slidesPerView={'auto'} spaceBetween={30} className="mySwiper">
      {songData?.map((song: any) => (
        <SwiperSlide className="w-fit">
          <AlbumCard
            key={song.key}
            coverImage={song.images?.coverart}
            title={song.title}
            artist={song.subtitle}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

// * DEFAULT EXPORT

const Home = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  return (
    <main className="px-6 text-white min-h-screen pb-16">
      <div className="md:flex">
        <Hero />
        <TopCharts songData={data} />
      </div>
      <NewReleases songData={data} />
    </main>
  );
};

export default Home;
