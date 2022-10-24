import { Charts, Hero, NewReleases } from '../components/';
import { useGetTopChartsQuery } from '../redux/services/musicApi';

const heroHeight: number = 380;

const Home = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data);

  return error ? (
    <h1 className="text-lg text-light font-bold text-center min-h-screen">
      Uh! Oh! It seems something went wrong
    </h1>
  ) : (
    <main className="px-6 text-white min-h-screen pb-16">
      <div className="lg:flex ">
        <div className={`lg:flex max-h-[${heroHeight}px]`}>
          <Hero isFetching={isFetching} />
        </div>
        <div className={`lg:flex max-h-[${heroHeight}px]`}>
          <Charts
            songData={data}
            isFetching={isFetching}
            heroHeight={heroHeight}
          />
        </div>
      </div>
      <NewReleases songData={data} isFetching={isFetching} />
    </main>
  );
};

export default Home;
