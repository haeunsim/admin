import { useEffect, useRef } from "react";
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
        labels: data.labels,
        datasets: [
          {
            label: "학교평균",
            data: data.schoolAvg,
            // backgroundColor: colors.school.bg,
            // borderColor: colors.school.border,
            borderWidth: 1,
          },
          {
            label: "교사 1인당 평균",
            data: data.teacherAvg,
            // backgroundColor: colors.teacher.bg,
            // borderColor: colors.teacher.border,
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
          plugins: {
            title: {
              display: true,
              // text: "AI 튜터 사용 빈도 낮은 학교",
              font: {
                size: 16,
              },
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              title: {
                display: true,
                text: "실행 횟수",
              },
            },
          },
        },
      });
    }
  }, [data, colors]);

  return (
    <div style={{ height: "300px", position: "relative" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default FrequencyChart;
