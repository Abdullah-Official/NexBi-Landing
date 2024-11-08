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
import {
  convertForLineChart,
  extractCompetitorNames,
  transformToKeywordsRankingStats,
} from "./utils/convertors";
import CustomModal from "./components/CustomModal";
import { FiArrowRight } from "react-icons/fi";
import { postBusinessData, postCompetitorData, postWaitlist } from "./utils/api";
import { toast } from "react-toastify";

function App() {
  const [businessResponse, setBusinessResponse] = useState();
  const [competitorsData, setCompetitorsData] = useState();
  const [waitlistModal, setWaitlistModal] = useState(false);
  const [domain, setDomain] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    company_name: "",
    competitors: [
      { name: "", url: "" },
      { name: "", url: "" },
    ],
    contact_us: false,
    insights_exist: true,
  });
  const [waitlistForm, setWaitlistForm] = useState({name:"", email: ""});

  const handleChangeWaitlist = (e) => {
    const { name, value } = e.target;
    setWaitlistForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "contact_us") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (name.includes("competitor")) {
      const [_, index, key] = name.split("_");
      setFormData((prevData) => {
        const competitors = [...prevData.competitors];
        competitors[index][key] = value;
        return { ...prevData, competitors };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getCompetitorsData()
  };

  const getBusinessData = async () => {
    try {
      setIsLoading(true);
      const response = await postBusinessData({
        domain,
        stats_type: "business",
      });
      console.log(response, " response");
      setBusinessResponse(response);
      toast.success("Business Data Generated Successfully", {autoClose: "2000"})
    } catch (error) {
      console.error("Error fetching business data:", error);
      toast.error("Something Went Wrong! Try again", {autoClose: "2000"})
    } finally {
      setIsLoading(false);
    }
  };

  const getCompetitorsData = async () => {
    try {
      setIsLoading(true);
      const response = await postCompetitorData({
        user_id: businessResponse?.user_id,
        ...formData,
        competitors: formData.competitors.map((v) => {
          if(v.name !== "" && v.url !== ""){
            return {
              name: v.name,
              url: v.url,
            }
          }
        })
      });
      console.log(response, " response");
      setCompetitorsData(response);
      toast.success("Competitors Insights Generated Successfully", {autoClose: "2000"})
    } catch (error) {
      console.error("Error fetching competitors data:", error);
      toast.error("Something Went Wrong! Try again", {autoClose: "2000"})
    } finally {
      setIsLoading(false);
    }
  };
  const submitWaitlist = async () => {
    try {
      setIsLoading(true);
      const response = await postWaitlist({
        ...waitlistForm
      });
      console.log(response, " response");
      toast.success("Thank you for joining the waitlist! We'll be in touch soon.", {autoClose: "2000"})
    } catch (error) {
      console.error("Error fetching competitors data:", error);
      toast.error("Something Went Wrong! Try again", {autoClose: "2000"})
    } finally {
      setWaitlistForm({name:"", email: ""})
      setIsLoading(false);
      setWaitlistModal(false)
    }
  };

  const handleWaitlistModal = () => {
    setWaitlistModal(true);
  };

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
        <Header handleWaitlistModal={handleWaitlistModal} />
        <div className="mt-20 md:mt-32 space-y-6 px-5 w-[95%] sm:w-full mx-auto">
          <HeroSection
            getBusinessData={getBusinessData}
            domain={domain}
            setDomain={setDomain}
            isLoading={isLoading}
          />
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #060809 100%)",
            }}
            className="flex justify-center mb-10 md:!mb-16 !mt-2 bg-blue-300 items-center relative w-full"
          ></div>
          {businessResponse ? (
            <>
              <ReviewSection
                title={businessResponse?.business_insights?.title}
                summary={
                  businessResponse?.business_insights?.insights_data
                    ?.overall_summary
                }
              />
              <CardSection
                positives={
                  businessResponse?.business_insights?.insights_data?.positives
                }
                opportunities={
                  businessResponse?.business_insights?.insights_data
                    ?.opportunities
                }
              />
              <ActionableSteps
                actionableTasks={
                  businessData?.business_insights?.actionable_tasks
                }
              />
              <div className="!mt-20">
                <StatisticsSection
                  selectors={["traffic", "keywords"]}
                  data={{
                    trafficImpressionsData:
                      businessResponse?.traffic_impressions,
                    keywordsRankingStatsData:
                      businessResponse?.keywords_ranking_stats,
                    keywordsMovementStatsData:
                      businessResponse?.keywords_movement_stats,
                    topRankedKeywords: businessResponse?.top_ranked_keywords,
                    topPageKeywords: businessResponse?.top_pages_by_keywords,
                    topPageTraffic: businessResponse?.top_pages_by_traffic,
                  }}
                />
              </div>
            </>
          ) : null}
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #060809 100%)",
            }}
            className="absolute bottom-0 left-0 w-full !bg-red-400"
          />
          <div
            id="video"
            className="w-full h-[250px] sm:h-[380px] md:h-[549px]"
          >
            <iframe
              width="100%"
              height={"100%"}
              src="https://www.youtube.com/embed/N45UC2WCwpk?si=YR79KtgPkyZK1nDE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          {businessResponse && competitorsData ? (
            <>
              <ReviewSection
                title={competitorsData?.competitors_insights?.title}
                summary={
                  competitorsData?.competitors_insights?.insights_data
                    ?.overall_summary
                }
              />
              <CardSection
                positives={
                  competitorsData?.competitors_insights?.insights_data
                    ?.positives
                }
                opportunities={
                  competitorsData?.competitors_insights?.insights_data
                    ?.opportunities
                }
              />
              <ActionableSteps
                actionableTasks={
                  competitorsData?.competitors_insights?.actionable_tasks
                }
              />
              <div className="!mt-20">
                <StatisticsSection
                  selectors={[
                    "Business",
                    ...extractCompetitorNames({
                      num_ranked_keywords: competitorsData?.num_ranked_keywords,
                    }),
                  ]}
                  data={{
                    trafficImpressionsData: convertForLineChart({
                      traffic_stats: competitorsData?.traffic_stats,
                    }),
                    keywordsRankingStatsData: transformToKeywordsRankingStats({
                      num_ranked_keywords: competitorsData?.num_ranked_keywords,
                    }),
                    topMentions: competitorsData?.top_mentions,
                    backlinksData: {
                      total_backlinks: competitorsData?.total_backlinks,
                    },
                    trustPilotStats: competitorsData?.trustpilot_stats,
                  }}
                />
              </div>
            </>
          ) : businessResponse ? (
            <CompetitorInsightsCard
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formData={formData}
              isLoading={isLoading}
            />
          ) : null}
          <div className="flex justify-center items-center !my-10 md:!my-20 ">
            <ParagraphSection />
          </div>
          <div className="!my-20">
            <CtaCardsSection businessResponse={businessResponse} />
          </div>
          <HowItWorks />
          <CommunityCta handleWaitlistModal={handleWaitlistModal} />
        </div>
      </div>
      <CustomModal onClose={() => setWaitlistModal(false)} open={waitlistModal}>
        <h2 className="text-left text-white text-xl font-semibold">
          Join the waitlist
        </h2>
        <div className="h-[300px] flex justify-center items-center">
          <form className="space-y-4">
            <input
              type="email"
              value={waitlistForm.email}
              onChange={handleChangeWaitlist}
              name="email"
              placeholder="Enter your email here"
              className="w-full px-4 py-3 rounded-full border border-[#FFFFFF12] bg-[#FFFFFF05] text-white placeholder-opacity-25 placeholder-[#FFFFFF] placeholder:text-sm focus:outline-none"
            />
            <input
              type="text"
              value={waitlistForm.name}
              onChange={handleChangeWaitlist}
              name="name"
              placeholder="Enter your name here"
              className="w-full px-4 py-3 rounded-full border border-[#FFFFFF12] bg-[#FFFFFF05] text-white placeholder-opacity-25 placeholder-[#FFFFFF] placeholder:text-sm focus:outline-none"
            />
            <button
              disabled={isLoading}
              onClick={submitWaitlist}
              type="submit"
              className="flex items-center justify-center disabled:cursor-not-allowed text-sm gap-3 w-full py-3.5 !mt-6 text-center font-semibold text-white bg-[#0773ED] rounded-full hover:bg-blue-700 focus:outline-none"
            >
              <p>Submit</p>
              <FiArrowRight size={20} color="#fff" />
            </button>
          </form>
        </div>
      </CustomModal>
    </div>
  );
}

export default App;
