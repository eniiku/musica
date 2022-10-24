// * ================================
// *        Imports
// *  ================================

import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AlbumCard, Charts, Hero } from '../components';
import { useGetTopChartsQuery } from '../redux/services/musicApi';

const heroHeight: number = 380;

// * ================================
// *       New Releases Section
// * ================================

interface DataProps {
  songData: any;
  isFetching: boolean;
}

const NewReleases = ({ songData, isFetching }: DataProps) => {
  const { activeSong, isPlaying } = useSelector((state: any) => state.player);
  return (
    <section className="mt-12">
      <h1 className="font-bold text-xl mb-5">New releases</h1>
      <Swiper slidesPerView={'auto'} spaceBetween={30} className="mySwiper">
        {songData?.map((song: any, i: number) => (
          <SwiperSlide key={song.key.toString()}>
            <AlbumCard
              coverImage={song.images?.coverart}
              title={song.title}
              artist={song.subtitle}
              loadState={isFetching}
              data={songData}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              i={i}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

// * =====================================
// *       Default Export (Home Section)
// * =====================================

const Home = () => {
  const { data, isFetchings, errors } = useGetTopChartsQuery();
  console.log(data);
  console.log(isFetchings);

  const error = false;

  const isFetching = true;

  return (
    <main className="px-6 text-white min-h-screen pb-16">
      {error ? (
        <h1 className="text-lg text-light font-bold text-center ">
          Uh! Oh! It seems something went wrong
        </h1>
      ) : (
        <>
          <div className={`lg:flex h-[${heroHeight}px]`}>
            <Hero isFetching={isFetching} />
            <Charts
              songData={data}
              isFetching={isFetching}
              heroHeight={heroHeight}
            />
          </div>
          <NewReleases songData={data} isFetching={isFetching} />
        </>
      )}
    </main>
  );
};

export default Home;
