import React, { useRef, useEffect, useState, useMemo } from 'react';
import Chart from 'chart.js/auto';

Chart.defaults.color = '#150B00';

const options = {
  scales: {
    y: {
      position: 'left',
      ticks: {
        stepSize: 1,
        callback: function (value, index, values) {
          return value;
        },
      },
    },
    yPercentage: {
      position: 'right',
      min: 0,
      max: 100,
      ticks: {
        color: '#0E68AB',
        stepSize: 20,
        callback: function (value, index, values) {
          return value + ' %';
        },
      },
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

function BarChart({ data, renderSwitch}) {
  const [chart, setChart] = useState();
  const chartRef = useRef();
  useEffect(() => {
    if (chart) {
      chart.destroy();
    }
    setChart(
      new Chart(chartRef.current.getContext('2d'), {
        type: 'bar',
        data: data,
        options,
      })
    );
  }, [renderSwitch]);
  return <canvas ref={chartRef} id="chart"></canvas>;
}


export default BarChart;
