import HeroImages from "./HeroImages";

const Hero = () => {
  return (
    <section className="">
      <div className="relative w-full flex items-center justify-center ">
        <div className="absolute inset-0 w-1/2 bg-gray-100/50 z-[-1]"></div>
        <div className="absolute inset-y-0 right-0 h-[743px] w-1/2 bg-gray-200/50 z-[-1]"></div>

        <div className="relative z-10 py-12 text-black text-center flex flex-col items-center justify-center">
          <h1 className="text-[60px] font-primary">Simplify Your AI Journey</h1>
          <p className="w-4/6 mt-2 font-primary">
            Deliver AI at scale across cloud, data center, edge, and client with
            our hardware and software portfolio.
          </p>
        </div>
      </div>
      <HeroImages />
    </section>
  );
};

export default Hero;
