import React, { useRef, useEffect } from 'react'
import Chart from "chart.js/auto";

Chart.defaults.color = '#150B00';

const data = {
    labels: ['Sultai Ultimatum', 'Mono-Red', 'Rouges', 'Mono-White', 'Titan\'s Nest'],
    datasets: [{
      label: '# of Matches',
      yAxisID: 'y',
      backgroundColor: '#D3202A',
      data: [4,3,3,2,1],
    }, {
      label: '# of Wins',
      yAxisID: 'y',
      backgroundColor: '#00733E',
      data: [3,3,2,1,0],
    }, {
      label: 'Win %',
      yAxisID: 'yPercentage',
      backgroundColor: '#0E68AB',
      data: [75,100,66,50,0],
    }, ]
}


const options = {
    scales: {
        y: {
            position: 'left',
            ticks: {
                stepSize: 1,
                callback: function (value, index, values) {
                    return value;
                }
            }
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
                }
            },
            grid: {
                drawOnChartArea: false
            }

        },
    },
}

function BarChart(props) {
    const chart = useRef();
    useEffect(() => {
        new Chart(chart.current.getContext("2d"), {
            type: 'bar',
            data,
            options
        });
    }, [])
    return (
        <canvas ref={chart} id="chart"></canvas>
    )
}

export default BarChart
