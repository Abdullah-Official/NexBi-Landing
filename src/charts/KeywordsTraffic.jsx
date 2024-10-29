import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// LineChartComponent
const KeywordsTraffic = ({ chartData }) => {
  // Prepare data for the chart
  const sortedData = Object.keys(chartData)
    .sort() // Sorting the keys
    .reduce((acc, key) => {
      // Only add data where traffic and impressions exist
      if (chartData[key].traffic && chartData[key].impressions) {
        acc.labels.push(key);
        acc.traffic.push(chartData[key]["traffic"]);
        acc.impressions.push(chartData[key]["impressions"]);
      }
      return acc;
    }, { labels: [], traffic: [], impressions: [] });

  const data = {
    labels: sortedData.labels,
    datasets: [
      {
        label: 'Traffic',
        data: sortedData.traffic,
        borderColor: '#1B76DE',  // Green for traffic
        backgroundColor: '#1B76DE', // Light green background
        borderWidth: 1,
        fill: true,
      },
      {
        label: 'Impressions',
        data: sortedData.impressions,
        borderColor: '#DE971B',  // Blue for impressions
        backgroundColor: '#DE971B', // Light blue background
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    barPercentage: 0.8,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true, // This makes the legend icon a circle
          pointStyle: 'circle', // Specify circle point style explicitly
          pointWidth:"1px"
        },
      },
    },
   
    maintainAspectRatio: false, // Allows for height and width adjustment
    scales: {
        y: {
          beginAtZero: true,
          position:"right",
          border:{dash: [4, 4]},
          grid:{
            display:true,
            color:"gray",
          }
        },
        x: {
          barPercentage: 0.5, // Controls the width of the bars (0.5 = 50% width of the category)
          categoryPercentage: 0.5, // Controls the width of the category that bars take up (0.5 = 50% of the total category width)
        },
      },
  };


  return (
    <div className='w-full h-[300px]'>
      <Line data={data} options={options} />
    </div>
  );
};

export default KeywordsTraffic;
