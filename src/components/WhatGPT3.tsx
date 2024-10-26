import Feature from "./Feature";

const WhatGPT3 = () => (
  <section className="w-10/12 mx-auto font-primary my-12">
    <div
      className="flex flex-col px-8 py-8 lg:py-12 bg-radial-custom shadow-lg rounded text-white"
      id="wgpt3"
    >
      {/* Feature Section */}
      <div className="flex mb-12 lg:mb-16">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>

      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-center lg:text-left mb-12 lg:mb-16">
        <h1 className="text-[20px] lg:text-[20px] xl:text-[30px] font-extrabold text-white leading-tight max-w-2xl mx-auto lg:mx-0 text-gradient capitalize">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-lg lg:text-xl font-medium text-gradient cursor-pointer mt-4 lg:mt-0 lg:ml-8">
          Explore the Library
        </p>
      </div>

      {/* Feature Cards Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8">
        <div className="flex-1 min-w-[210px]">
          <Feature
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
            id={true}
          />
        </div>
        <div className="flex-1 min-w-[210px]">
          <Feature
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            id={true}
          />
        </div>
        <div className="flex-1 min-w-[210px]">
          <Feature
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            id={true}
          />
        </div>
      </div>
    </div>
  </section>
);

export default WhatGPT3;
