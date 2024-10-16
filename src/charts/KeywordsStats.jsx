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
  const sortedData = Object.keys(chartData)
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
    datasets: [
      {
        label: 'Improved',
        data: sortedData.improved,
        backgroundColor: 'rgba(0, 200, 83, 0.6)',  // Bright green
        borderColor: 'rgba(0, 200, 83, 1)',        // Darker green for border
        borderWidth: 2,
      },
      {
        label: 'Declined',
        data: sortedData.declined,
        backgroundColor: 'rgba(33, 150, 243, 0.6)',  // Bright blue
        borderColor: 'rgba(33, 150, 243, 1)',        // Darker blue for border
        borderWidth: 2,
      },
      {
        label: 'Lost',
        data: sortedData.lost,
        backgroundColor: 'rgba(244, 67, 54, 0.6)',   // Bright red
        borderColor: 'rgba(244, 67, 54, 1)',         // Darker red for border
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Keywords Ranking Stats',
      },
    },
    maintainAspectRatio: false, // Allows for height and width adjustment
    scales: {
        y: {
          beginAtZero: true,
        },
      },
  };

  return (
    <div style={{ width: '400px', height: '300px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default KeywordsStats;
