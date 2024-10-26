import Button from "./Button";

const Highlights = () => {
  return (
    <section className="mt-24 font-primary">
      <div className="flex justify-between">
        <div className="bg-gray/50 pl-16 w-[955px] intel">
          <img src="/images/female.png" alt="" className="-mt-16 h-[650px]" />
        </div>
        <div className="w-1/2 flex justify-center flex-col px-10 py-6 gap-y-6">
          <span className="text-base text-primary">
            Intel® Core™ Ultra processors
          </span>
          <h2 className="text-4xl">Elevate how you work, create, and play</h2>
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

export default Highlights;
