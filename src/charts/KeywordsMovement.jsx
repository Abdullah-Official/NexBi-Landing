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
const KeywordsMovement = ({ chartData }) => {
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
        borderColor: 'rgba(0, 200, 83, 1)',  // Green for traffic
        backgroundColor: 'rgba(0, 200, 83, 0.2)', // Light green background
        borderWidth: 2,
        fill: true,
      },
      {
        label: 'Impressions',
        data: sortedData.impressions,
        borderColor: 'rgba(33, 150, 243, 1)',  // Blue for impressions
        backgroundColor: 'rgba(33, 150, 243, 0.2)', // Light blue background
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Keywords Movement',
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
      <Line data={data} options={options} />
    </div>
  );
};

export default KeywordsMovement;
