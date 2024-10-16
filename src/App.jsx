import React, { useState } from 'react';
import KeywordsStats from './charts/KeywordsStats';
import { keywordsMovementData, keywordsStatsData, simpleTrafficImpressionData } from './utils/charts-data';
import KeywordsMovement from './charts/KeywordsMovement';
import MonthlyDataPagewise from './charts/MonthlyDataPageWise';
import SimpleTrafficImpression from './charts/SimpleTrafficImpression';

function App() {
  const [showChart, setShowChart] = useState(false);

  const handleGenerateCharts = () => {
    setShowChart(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={handleGenerateCharts} style={{ padding: '10px 20px', fontSize: '16px' }}>Generate Charts</button>
      {showChart && (
        <div
          style={{
            gap: '20px', // Space between charts
            marginTop: '20px',
            display:"flex",
            flexWrap:'wrap',
          }}
        >
          <div className="chart-container">
            <KeywordsStats chartData={keywordsStatsData} />
          </div>
          <div className="chart-container">
            <KeywordsMovement chartData={keywordsMovementData} />
          </div>
          <div className="chart-container">
            <MonthlyDataPagewise chartData={keywordsMovementData} />
          </div>
          <div className="chart-container">
            <SimpleTrafficImpression chartData={simpleTrafficImpressionData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
