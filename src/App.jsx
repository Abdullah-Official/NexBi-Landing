import ActionableSteps from "./components/ActionableSteps";
import CardSection from "./components/CardSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ReviewSection from "./components/ReviewSection";
import StatisticsSection from "./components/StatisticsSection";
import BgSvg from "./assets/bg-svg.svg"

function App() {
  return (
    <div className="bg-[#060809] min-h-screen overflow-hidden">
      {/* Light effect */}
      <div className="absolute left-0 top-0 inset-0 pointer-events-none">
        {/* <div className="w-[40%] h-[399px] md:h-[80%] bg-gradient-to-bl from-[#ffffff] to-transparent opacity-[0.011] clip-torch" /> */}
        <img src={BgSvg} className="object-contain bg-no-repeat opacity-[0.03] h-full" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto py-4">
        <Header />
        <div className="mt-20 md:mt-32 space-y-6 px-5 w-[95%] sm:w-full mx-auto">
          <HeroSection />
          <ReviewSection />
          <CardSection />
          <ActionableSteps />
          <div className="!mt-20">
          <StatisticsSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import KeywordsStats from './charts/KeywordsStats';
// import { keywordsMovementData, keywordsStatsData, simpleTrafficImpressionData } from './utils/charts-data';
// import KeywordsMovement from './charts/KeywordsMovement';
// import SimpleTrafficImpression from './charts/SimpleTrafficImpression';
// import MonthlyDataPagewise from './charts/MonthlyDataPagewise';

// function App() {
//   const [showChart, setShowChart] = useState(false);

//   const handleGenerateCharts = () => {
//     setShowChart(true);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <button onClick={handleGenerateCharts} style={{ padding: '10px 20px', fontSize: '16px' }}>Generate Charts</button>
//       {showChart && (
//         <div
//           style={{
//             gap: '20px', // Space between charts
//             marginTop: '20px',
//             display:"flex",
//             flexWrap:'wrap',
//           }}
//         >
//           <div className="chart-container">
//             <KeywordsStats chartData={keywordsStatsData} />
//           </div>
//           <div className="chart-container">
//             <KeywordsMovement chartData={keywordsMovementData} />
//           </div>
//           <div className="chart-container">
//             <MonthlyDataPagewise chartData={keywordsMovementData} />
//           </div>
//           <div className="chart-container">
//             <SimpleTrafficImpression chartData={simpleTrafficImpressionData} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
