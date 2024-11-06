import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// ChartComponent
const KeywordsStats = ({ chartData }) => {
  // Prepare data for the chart
  if(!chartData) return;
  const sortedData = Object?.keys(chartData)
    .sort() // Sorting the keys
    .reduce((acc, key) => {
      acc.labels.push(key);
      acc.improved.push(chartData[key]["num_keywords_ranking_improved"]);
      acc.declined.push(chartData[key]["num_keywords_ranking_declined"]);
      acc.lost.push(chartData[key]["num_keywords_lost_ranking"]);
      return acc;
    }, { labels: [], improved: [], declined: [], lost: [] });

  const data = {
    labels: sortedData.labels,
    pointStyle: "circle",
    datasets: [
      {
        label: 'Improved',
        data: sortedData.improved,
        backgroundColor: '#23B649',  // Bright green
        // borderColor: '#23B649',        // Darker green for border
      },
      {
        label: 'Declined',
        data: sortedData.declined,
        backgroundColor: '#DF9B34',  // Bright blue
        // borderColor: 'rgba(33, 150, 243, 1)',        // Darker blue for border
      },
      {
        label: 'Lost',
        data: sortedData.lost,
        backgroundColor: '#CD3749',   // Bright red
        // borderColor: 'rgba(244, 67, 54, 1)',         // Darker red for border
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
    <div className='w-full h-[300px] md:w-full'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default KeywordsStats;
