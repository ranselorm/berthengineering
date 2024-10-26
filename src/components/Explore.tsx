import Button from "./Button";

const Explore = () => {
  return (
    <section className="mt-32 font-primary px-8">
      <div className="flex flex-row-reverse justify-center items-center">
        <div className="">
          <img
            src="/images/man.png"
            alt="man"
            className="-mt-16 h-[600px] rounded"
          />
        </div>
        <div className="w-5/12 flex justify-center flex-col px-10 py-6 gap-y-6">
          <span className="text-base text-primary">
            Intel® Core™ Ultra processors
          </span>
          <h2 className="text-4xl">Unlock AI Value in Your Enterprise</h2>
          <p className="">
            The new Intel® Xeon® processors and Intel® Gaudi® 3 AI accelerators
            are built to efficiently and cost-effectively handle a broad
            spectrum of workloads, including high-demand AI applications.
          </p>
          <Button text="Explore more" />
        </div>
      </div>
    </section>
  );
};

export default Explore;
