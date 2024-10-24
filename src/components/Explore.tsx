import Button from "./Button";
const Explore = () => {
  return (
    <section className="mt-0 font-primary bg-[url('/images/bg1.png')] bg-cover bg-center">
      <div className="flex flex-row-reverse justify-between">
        <div className="w-1/2 bg-gray-200/50">
          <img src="/images/5.jpg" alt="" className="" />
        </div>
        <div className="w-1/2 flex justify-center flex-col px-10 py-6 gap-y-6">
          <span className="text-sm text-primary">
            Intel® Core™ Ultra processors
          </span>
          <h2 className="text-3xl">Elevate how you work, create, and play</h2>
          <p className="">
            Experience the potential of intelligent AI assistants, effortless
            text and image creation, enhanced collaboration effects, and more–
            right at your fingertips. Redefine your PC experience with
            heightened personalization and productivity, where every task is now
            smarter.
          </p>
          <Button text="Explore more" />
        </div>
      </div>
    </section>
  );
};

export default Explore;
