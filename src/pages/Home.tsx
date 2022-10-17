//
// *       CONTENT
// ? Imports                  Line 9
// ? Hero Section             Line 13
// ? Top charts Section       Line ...
// ? Other sections           Line ...
// ? Default Export           Line 61

// * IMPORTS

import likeIcon from '../assets/icons/like.svg';
import { ListViewCard } from '../components';

// * HERO SECTION

const Hero = () => (
  <section
    className="bg-blue-400 h-[500px] rounded-3xl
        flex flex-col justify-between p-8 text-left"
  >
    <p className="text-xs">Curated playlist</p>

    <div>
      <article>
        <h3 className="font-bold text-4xl mb-2">R & B Hits</h3>

        <p className="text-sm">
          All mine, Lie again, Petty call me everyday, Out of time, No love, Bad
          habit, and so much more
        </p>
      </article>

      <div className="flex justify-start items-center mt-8">
        <div className="relative">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <div
              key={num}
              className={`w-[calc(1.75rem_+_2px)] h-[calc(1.75rem_+_2px)] rounded-full bg-black inline-block transform -translate-x-[${
                num * index
              }px] border-2 border-blue-400`}
            >
              {num}
            </div>
          ))}
        </div>

        <img
          src={likeIcon}
          role="presentation"
          className="w-[22px] h-[22px] mx-[18px]"
        />

        <p className="text-2xl">33K Likes</p>
      </div>
    </div>
  </section>
);

// * DEFAULT EXPORT

const Home = () => {
  return (
    <main className="px-6 text-white">
      <Hero />

      <section className="mt-12">
        <h1 className="font-bold text-xl">Top charts</h1>

        <div>
          <ListViewCard
            coverImage="#"
            title="Golden age of 80s"
            artist="Sean Swadder"
            time="2:34:45"
            favorite={false}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
