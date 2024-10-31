import KeywordsStats from "../charts/KeywordsStats";
import { keywordsMovementData, keywordsStatsData, simpleTrafficImpressionData } from "../utils/charts-data";
import BarComponent from "./BarComponent";
import KeywordsMovement from "../charts/KeywordsMovement";
import KeywordsTraffic from "../charts/KeywordsTraffic";
import TopPageCard from "./TopPageCard";
import TopRankedCard from "./TopRankedCard";
import ShowPageSelector from "./ShowPageSelector";
import { useState } from "react";


const StatisticsSection = () => {
  const [showRankingBy, setShowRankingBy] = useState("keywords")
  return (
    <section className="space-y-7">
      <h1 className="text-lg md:text-2xl lg:text-3xl text-white text-center font-[600]">Key Statistics</h1>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
        <BarComponent heading={"Keywords Ranking"} chartData={keywordsStatsData} ChartComponent={KeywordsStats} />
        <TopPageCard />
        </div>
        <div className="flex flex-col gap-4">
         <ShowPageSelector showRankingBy={showRankingBy} setShowRankingBy={setShowRankingBy} />
        <BarComponent heading={"Keywords Movement"} chartData={keywordsMovementData} ChartComponent={KeywordsMovement} />
        </div>
        <div className="flex flex-col gap-4">
        <TopRankedCard />
        <BarComponent heading={"Keywords Traffic"} chartData={simpleTrafficImpressionData} ChartComponent={KeywordsTraffic} />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
