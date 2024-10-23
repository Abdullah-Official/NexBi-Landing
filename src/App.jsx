import CardSection from "./components/CardSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ReviewSection from "./components/ReviewSection";
import StatisticsSection from "./components/StatisticsSection";

function App() {
  return (
    <div className=" bg-[#060809] min-h-screen overflow-hidden">
      {/* Diagonal gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div> */}

      <div className="relative w-full max-w-5xl mx-auto py-4">
      <Header />
      <div className="mt-20">
      <HeroSection />
      </div>
      {/* <ReviewSection /> */}
      {/* <CardSection /> */}
      {/* <StatisticsSection /> */}
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
