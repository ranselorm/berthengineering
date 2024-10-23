const Hero = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="absolute inset-0 w-1/2 bg-gray-100/50"></div>

      {/* Right Side: Black */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gray-200/50"></div>

      {/* Centered Text */}
      <div className="z-10 py-16 text-black text-center flex flex-col items-center justify-center">
        <h1 className="text-[60px] font-primary">Simplify Your AI Journey</h1>
        <p className="w-4/6 mt-4 font-primary">
          Deliver AI at scale across cloud, data center, edge, and client with
          our hardware and software portfolio.
        </p>
      </div>
    </div>
  );
};

export default Hero;
