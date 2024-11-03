import React from "react";
import { FiArrowRight } from "react-icons/fi";

const CompetitorInsightsCard = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative py-6 px-8 card_wrapper rounded-[28px] max-w-md text-center text-white shadow-lg overflow-hidden">
        
      <span></span>
      <span></span>
      <span></span>
      <span></span>
                
      <h4 className="hero_heading py-4 text-4xl text-center !font-extrabold">
      Unlock Deep Competitor Insights
      </h4>
        <p className="text-[16px] font-[400] opacity-75 text-[#FFFFFFBF] mb-7 mt-4 ">
          Analyze what your competitor is doing to rank higher. We'll identify the resources they’re using and provide details on how you can also appear there.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email here"
            className="w-full px-4 py-3 rounded-full border border-[#FFFFFF12] bg-[#FFFFFF05] text-white placeholder-opacity-25 placeholder-[#FFFFFF] placeholder:text-sm focus:outline-none"
          />
          <input
            type="url"
            placeholder="Enter your competitor 1 URL"
            className="w-full px-4 py-3 rounded-full border border-[#FFFFFF12] bg-[#FFFFFF05] text-white placeholder-opacity-25 placeholder-[#FFFFFF] placeholder:text-sm focus:outline-none"
          />
          <input
            type="url"
            placeholder="Enter your competitor 2 URL (OPTIONAL)"
            className="w-full px-4 py-3 rounded-full border border-[#FFFFFF12] bg-[#FFFFFF05] text-white placeholder-opacity-25 placeholder-[#FFFFFF] placeholder:text-sm focus:outline-none"
          />
          <label className="flex text-left my-2 text-sm opacity-75 text-[#fff]">
            <input
              type="checkbox"
              className="mr-2 mt-1 h-4 w-4 text-blue-500 bg-transparent cursor-pointer rounded focus:ring-0"
            />
            This is just a tip of the iceberg, would you like to dive deep into further more insights and automate those actionable steps?
          </label>
          <button
            type="submit"
            className="flex items-center justify-center text-sm gap-3 w-full py-3.5 !mt-6 text-center font-semibold text-white bg-[#0773ED] rounded-full hover:bg-blue-700 focus:outline-none"
          >
            <p>See Competitor Insights </p>
            <FiArrowRight size={20} color="#fff" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompetitorInsightsCard;
