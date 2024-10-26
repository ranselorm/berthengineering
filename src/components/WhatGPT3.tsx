import Feature from "./Feature";

const WhatGPT3 = () => (
  <div
    className="flex flex-col section__margin px-8 py-12 lg:py-16 bg-radial-custom shadow-lg"
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
      <h1 className="text-[34px] lg:text-[42px] xl:text-[56px] font-extrabold text-white leading-tight max-w-2xl mx-auto lg:mx-0 gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p className="text-lg lg:text-xl font-medium text-orange-400 cursor-pointer mt-4 lg:mt-0 lg:ml-8">
        Explore the Library
      </p>
    </div>

    {/* Feature Cards Section */}
    <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8">
      <div className="flex-1 min-w-[210px]">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
      </div>
      <div className="flex-1 min-w-[210px]">
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
      <div className="flex-1 min-w-[210px]">
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  </div>
);

export default WhatGPT3;
