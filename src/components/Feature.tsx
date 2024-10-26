import React from "react";

interface FeatureProps {
  title: string;
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ title, text }) => (
  <div className="flex flex-col sm:flex-row items-start justify-between w-full my-4 space-y-2 sm:space-y-0 sm:space-x-4">
    <div className="flex-1 max-w-[180px] mr-8">
      <div className="w-[38px] h-[3px] bg-gradient-to-r from-purple-400 to-pink-600 shadow-md mb-1" />
      <h1 className="text-white font-extrabold text-lg leading-6 tracking-tight">
        {title}
      </h1>
    </div>
    <div className="flex-2 max-w-[390px]">
      <p className="text-gray-300 font-medium text-sm sm:text-base leading-6">
        {text}
      </p>
    </div>
  </div>
);

export default Feature;
