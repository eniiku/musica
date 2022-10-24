import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ListViewCard } from './ListViewCard';

import 'swiper/css';
import 'swiper/css/free-mode';

interface DataProps {
  songData: any;
  isFetching: boolean;
  heroHeight: number;
}

const Charts = ({ songData, isFetching, heroHeight }: DataProps) => {
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
    <section className={`mt-12 lg:mt-0 lg:ml-12 lg:h-full`}>
      <h1 className="font-bold text-xl mb-5 md:mb-0">Top charts</h1>
      <Swiper
        slidesPerView="auto"
        spaceBetween={12}
        centeredSlides
        centeredSlidesBounds
        freeMode={true}
        modules={[FreeMode]}
        direction={windowWidth > 1023 ? 'vertical' : 'horizontal'}
        className={`mySwiper lg:h-[345px]`}
      >
        {isFetching
          ? ['', '', '', '', ''].map((item, index) => (
              <SwiperSlide key={index} className="w-fit h-fit mt-4">
                <div
                  key={index}
                  className="flex flex-none items-start justify-between rounded-2xl p-4
                bg-white bg-opacity-25 w-[320px] md:min-w-[420px] md:items-center animate-pulse"
                >
                  <div className="md:flex items-center w-full">
                    <div
                      className="w-[110px] h-[100px] rounded-xl mb-4  
            md:w-[64px] md:h-[64px] flex-none bg-light bg-opacity-25"
                    />
                    <div className="md:ml-4 md:pr-6 md:min-h-[64px] w-full">
                      <h3 className="bg-light bg-opacity-25 h-8 w-full">
                        {item}
                      </h3>
                      <p className="opacity-50 bg-light h-4 my-4 md:my-1 w-full"></p>
                      <h4 className="h-6 md:h-4 bg-opacity-25 bg-light w-full"></h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          : songData?.map((song: any) => (
              <SwiperSlide key={song.key.toString()} className="w-fit h-fit">
                <Link to={`/top-charts/:${song?.adamid}`}>
                  <ListViewCard
                    coverImage={song.images?.coverart}
                    title={song.title}
                    artist={song.subtitle}
                    time={song.artists?.adamid}
                    favorite={false}
                  />
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
};

export default Charts;
