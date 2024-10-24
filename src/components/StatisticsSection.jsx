import { FaArrowUp } from "react-icons/fa";
import KeywordsMovement from "../charts/KeywordsMovement";
import KeywordsStats from "../charts/KeywordsStats";
import { keywordsMovementData, keywordsStatsData } from "../utils/charts-data";

const StatisticsSection = () => {
  return (
    <div className="flex mt-10 gap-8 ">
      <div className="flex w-full md:w-[42%] flex-col gap-5">
      <div className="py-[0.3px] backdrop-blur-[100px] rounded-[36px] shadow-md border border-transparent bg-gradient-to-br from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.03)]">
        <div
          style={{
            background:
              "linear-gradient(90.29deg, rgba(13, 15, 18, 0.5) 33.92%, rgba(11, 12, 15, 0.5) 88.83%)",
          }}
          className=" rounded-[36px] h-full w-full !bg-[#060809] px-5 py-5 border-2 border-transparent opacity-95  bg-clip-padding"
        >
          <div className="h-full w-full space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-[21px] text-[#CBCCCD] font-[600]">Keywords Ranking</h2>
              <button className="flex gap-2 py-2 px-3 bg-[#75FF9A14] rounded-lg justify-center items-center">
                <FaArrowUp size={15} color={"#55F69D"} />
                <p className="font-bold text-sm text-[#55F69D]">50%</p>
              </button>
            </div>
          <KeywordsStats chartData={keywordsStatsData} />
          </div>
        </div>
      </div>
      </div> 
      <div className="flex flex-1 h-full bg-red-100"></div>
    </div>
  );
};

export default StatisticsSection;
