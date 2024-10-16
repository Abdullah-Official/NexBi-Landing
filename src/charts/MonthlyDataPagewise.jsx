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

// BarChartComponent
const MonthlyDataPagewise = ({ chartData }) => {
  // Prepare data for the chart
  const sortedData = Object.keys(chartData)
    .sort() // Sorting the keys
    .reduce((acc, key) => {
      acc.labels.push(key);
      acc.firstPage.push(chartData[key]["num_keywords_ranking_on_first_page"] || 0);
      acc.secondThirdPage.push(chartData[key]["num_keywords_ranking_on_second_and_third_page"] || 0);
      acc.fourthTenthPage.push(chartData[key]["num_keywords_ranking_on_fourth_till_10_page"] || 0);
      return acc;
    }, { labels: [], firstPage: [], secondThirdPage: [], fourthTenthPage: [] });

  const data = {
    labels: sortedData.labels,
    datasets: [
      {
        label: 'First Page',
        data: sortedData.firstPage,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',  // Teal shade for first page
        borderWidth: 1,
      },
      {
        label: 'Second & Third Page',
        data: sortedData.secondThirdPage,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',  // Blue shade for second and third page
        borderWidth: 1,
      },
      {
        label: 'Fourth till 10th Page',
        data: sortedData.fourthTenthPage,
        backgroundColor: 'rgba(255, 159, 64, 0.6)',  // Orange shade for fourth to tenth page
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Data Page wise',
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

export default MonthlyDataPagewise;
