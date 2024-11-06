import ActionableSteps from "./components/ActionableSteps";
import CardSection from "./components/CardSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ReviewSection from "./components/ReviewSection";
import StatisticsSection from "./components/StatisticsSection";
import BgSvg from "./assets/bg-svg.svg";
import CompetitorInsightsCard from "./components/CompetitorInsightsCard";
import CtaCardsSection from "./components/CtaCardsSection";
import ParagraphSection from "./components/ParagraphSection";
import CommunityCta from "./components/CommunityCta";
import HowItWorks from "./components/HowItWorks";
import { useEffect, useState } from "react";
import { businessData } from "./utils/business-data";

function App() {

  const [businessResponse, setBusinessResponse] = useState()

  useEffect(() => {
    setBusinessResponse(businessData);
    console.log({businessResponse})
  },[])

  return (
    <div className="bg-[#060809] min-h-screen overflow-hidden">
      {/* Light effect */}
      <div className="absolute left-0 top-0 inset-0 pointer-events-none">
        {/* <div className="w-[40%] h-[399px] md:h-[80%] bg-gradient-to-bl from-[#ffffff] to-transparent opacity-[0.011] clip-torch" /> */}
        <img
          src={BgSvg}
          className="object-contain bg-no-repeat opacity-[0.03] h-full"
        />
      </div>

      <div className="relative w-full max-w-[66rem] mx-auto py-4 mb-20">
        <Header />
        <div className="mt-20 md:mt-32 space-y-6 px-5 w-[95%] sm:w-full mx-auto">
          <HeroSection />
          <div style={{background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #060809 100%)"}} className="flex justify-center mb-10 md:!mb-16 !mt-2 bg-blue-300 items-center relative w-full">
            <div 
              style={{background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #060809 100%)"}}
              className="absolute bottom-0 left-0 w-full !bg-red-400"
            />
            <div id="video" className="w-full h-[250px] sm:h-[380px] md:h-[549px]">
              <iframe
                width="100%"
                height={"100%"}
                src="https://www.youtube.com/embed/N45UC2WCwpk?si=YR79KtgPkyZK1nDE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <ReviewSection title={businessResponse?.business_insights?.title} summary={businessResponse?.business_insights?.insights_data?.overall_summary} />
          <CardSection positives={businessResponse?.business_insights?.insights_data?.positives} opportunities={businessResponse?.business_insights?.insights_data?.opportunities} />
          <ActionableSteps actionableTasks={businessData?.business_insights?.actionable_tasks} />
          <div className="!mt-20">
            <StatisticsSection data={{
              trafficImpressionsData: businessResponse?.traffic_impressions,
              keywordsRankingStatsData: businessResponse?.keywords_ranking_stats,
              keywordsMovementStatsData: businessResponse?.keywords_movement_stats,
              topRankedKeywords: businessResponse?.top_ranked_keywords,
              topPageKeywords: businessResponse?.top_pages_by_keywords,
              topPageTraffic: businessResponse?.top_pages_by_traffic
            }} />
          </div>
          <CompetitorInsightsCard />
          <div className="flex justify-center items-center !my-10 md:!my-20 ">
            <ParagraphSection />
          </div>
          <div className="!my-20">
            <CtaCardsSection />
          </div>
          <HowItWorks />
          <CommunityCta />
        </div>
      </div>
    </div>
  );
}

export default App;
