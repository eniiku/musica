import { Like } from '../assets/icons';

const Hero = ({
  isFetching,
  heroHeight,
}: {
  isFetching: boolean;
  heroHeight: number;
}) => {
  return isFetching ? (
    <section
      className={`h-[500px] md:h-[${heroHeight}px] w-full rounded-3xl
        flex flex-col flex-none justify-between p-8 md:w-full lg:w-[680px]
        bg-light bg-opacity-25 animate-pulse`}
    >
      <p className="bg-light bg-opacity-25 w-full h-3"></p>

      <article className="mt-32 md:mt-0">
        <h3 className="mb-2 bg-light bg-opacity-25 w-full h-8"></h3>

        <p className="w-full h-16 bg-light bg-opacity-25"></p>
      </article>

      <div className="w-full h-6 bg-light bg-opacity-25"></div>
    </section>
  ) : (
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
};

export default Hero;
