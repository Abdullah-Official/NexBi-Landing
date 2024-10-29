import { FaArrowUp } from "react-icons/fa";
import KeywordsStats from "../charts/KeywordsStats";
import { keywordsMovementData, keywordsStatsData, simpleTrafficImpressionData } from "../utils/charts-data";
import BarComponent from "./BarComponent";
import KeywordsMovement from "../charts/KeywordsMovement";
import KeywordsTraffic from "../charts/KeywordsTraffic";

   


const StatisticsSection = () => {
  return (
    <section className="space-y-3">
      <h1 className="text-lg md:text-2xl lg:text-3xl text-white text-center font-[600]">Key Statistics</h1>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
        <BarComponent heading={"Keywords Ranking"} chartData={keywordsStatsData} ChartComponent={KeywordsStats} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-[70px]" />
        <BarComponent heading={"Keywords Movement"} chartData={keywordsMovementData} ChartComponent={KeywordsMovement} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-[170px]" />
        <BarComponent heading={"Keywords Traffic"} chartData={simpleTrafficImpressionData} ChartComponent={KeywordsTraffic} />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
