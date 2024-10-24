import { Icon } from "@iconify/react";
import Button from "./Button";
import { FeaturesData } from "../data";

const Features = () => {
  return (
    <section className="px-5 mt-12 text-white font-primary">
      <div className="flex gap-6 justify-center">
        <div className="w-4/12 rounded bg-secondary h-[326px] flex px-6 flex-col justify-center gap-5">
          <Icon icon="hugeicons:ai-brain-04" height={30} color="#fff" />
          <h2 className="font-semibold text-3xl">AI</h2>
          <p>
            Development tools and resources help you prepare, build, deploy, and
            scale your AI solutions.
          </p>
          <Button text="Explore" width="30px" />
        </div>

        <div className="w-8/12 flex flex-wrap gap-2">
          {FeaturesData.map((feature, index) => (
            <div className="w-52 rounded h-40 bg-secondary flex flex-col items-center justify-center gap-3">
              <Icon icon={feature.icon} height={30} key={index} />
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        asperiores quas quod quisquam officia praesentium! Error enim eos
        dolorem aliquid soluta sequi vitae earum optio totam sed, tenetur
        laboriosam repellendus.
      </p>
    </section>
  );
};

export default Features;
