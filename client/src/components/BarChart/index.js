import React, { useRef, useEffect, useState } from 'react'
import Chart from "chart.js/auto";

Chart.defaults.color = '#150B00';

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

function BarChart({data, type}) {
    
    console.log('chart data', data)
    const chart = useRef();
    useEffect(() => {
        const myChart = new Chart(chart.current.getContext("2d"), {
            type,
            data: data,
            options
        });
        myChart.update()
    }, [data])
    return (
            <canvas ref={chart} id="chart"></canvas>
    )
}

// class BarChart extends React.Component {
//     render({data}){
//         return (
//             <canvas id="chart"></canvas>
//         )
//     }
// }

export default BarChart
