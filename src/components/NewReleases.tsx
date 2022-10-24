import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AlbumCard } from '../components';

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
        {isFetching
          ? ['', '', '', '', '', '', '', '', ''].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="cursor-pointer">
                  <div
                    className="w-[150px] h-[150px] rounded-3xl bg-white opacity-25
        animate-pulse"
                  />
                  <h5
                    className="text-xs my-2 text-left w-[150px] bg-white
                  bg-opacity-25 h-3 animate-pulse"
                  >
                    {item}
                  </h5>
                  <h5
                    className="opacity-50 text-xs w-[150px] bg-white h-3
                  bg-opacity-20 animate-pulse"
                  ></h5>
                </div>
              </SwiperSlide>
            ))
          : songData?.map((song: any, i: number) => (
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

export default NewReleases;
