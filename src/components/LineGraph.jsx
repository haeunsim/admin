import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Chart from "chart.js/auto";
import Dropdown from "./common/Dropdown";

const Container = styled.div`
  background: #f1f8ff;
  text-align: center;
  padding: 20px 72px 23px;
  border-radius: 36px;

  canvas {
    width: 500px;
    height: auto;
    background: #fff;
    padding: 20px;
    border-radius: 36px;
  }
`;

const LineGraph = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const data = {
    labels: ["12/12", "12/13", "12/14", "12/15", "12/16"],
    datasets: [
      {
        label: "평균 발언 횟수",
        data: [65, 59, 80, 81, 66],
        borderColor: "#2E90FF",
        backgroundColor: "rgba(99, 115, 255, 0.5)",
        yAxisID: "y",
        pointRadius: 0,
        lineTension: 0.4,
      },
      {
        label: "참여율",
        data: [38, 48, 40, 49, 86],
        borderColor: "#40C463",
        backgroundColor: "rgba(54, 235, 84, 0.5)",
        yAxisID: "y1",
        pointRadius: 0,
        lineTension: 0.4,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      scales: {
        y: {
          type: "linear",
          display: true,
          position: "left",
          title: {
            display: true,
            // text: "진도율 (%)",
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, config);
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const options = [
    "국어",
    "사회",
    "과학",
  ];

  return (
    <>
      <Container>
        <Dropdown label="과목 전체" options={options} />
        <canvas ref={chartRef}></canvas>
      </Container>
    </>
  );
};

export default LineGraph;
