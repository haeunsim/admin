import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const FrequencyChart = ({ data, colors }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      const chartData = {
        labels: data?.labels,
        datasets: [
          {
            label: "학교평균",
            data: data.schoolAvg,
            borderWidth: 1,
          },
          {
            label: "교사 1인당 평균",
            data: data.teacherAvg,
            borderWidth: 1,
          },
        ],
      };

      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: chartData,
        options: {
          responsive: true,
          indexAxis: "y",
          scales: {
            x: {
              beginAtZero: true,
              title: {
                display: true,
                text: "실행 횟수",
              },
            },
          },
          // barThickness: 20,
          // categoryPercentage: 1.0,
          // barPercentage: 0.8,  
        },
      });
    }
  }, [data, colors]);

  return (
    <div style={{ position: "relative", marginTop: "20px" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default FrequencyChart;
