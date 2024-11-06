import KeywordsStats from "../charts/KeywordsStats";
import BarComponent from "./BarComponent";
import KeywordsMovement from "../charts/KeywordsMovement";
import KeywordsTraffic from "../charts/KeywordsTraffic";
import TopPageCard from "./TopPageCard";
import TopRankedCard from "./TopRankedCard";
import ShowPageSelector from "./ShowPageSelector";
import { useState } from "react";


const StatisticsSection = ({data}) => {
  const [selectorType, setSelectorType] = useState("traffic");
  const {trafficImpressionsData, keywordsRankingStatsData, keywordsMovementStatsData, topRankedKeywords, topPageKeywords, topPageTraffic} = data
  return (
    <section className="space-y-7">
      <h1 className="text-lg md:text-2xl lg:text-3xl text-white text-center font-[600]">Key Statistics</h1>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
        <BarComponent heading={"Keywords Ranking"} chartData={keywordsRankingStatsData} ChartComponent={KeywordsStats} />
        <TopPageCard selectorType={selectorType} data={{topPageKeywords, topPageTraffic}} />
        </div>
        <div className="flex flex-col gap-4">
         <ShowPageSelector selectorType={selectorType} setSelectorType={setSelectorType} />
        <BarComponent heading={"Keywords Movement"} chartData={keywordsMovementStatsData} ChartComponent={KeywordsMovement} />
        </div>
        <div className="flex flex-col gap-4">
        <TopRankedCard topRankedKeywords={topRankedKeywords} />
        <BarComponent heading={"Keywords Traffic"} chartData={trafficImpressionsData} ChartComponent={KeywordsTraffic} />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
