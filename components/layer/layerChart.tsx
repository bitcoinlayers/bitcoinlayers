import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { Layer } from "./layerProps"; 
import { RISK_FACTOR_CATEGORIES } from "@/constants";

const wordToColor: { [key: string]: string } = {
  "Low": "#48E55F",
  "Medium": "#FFC21B",
  "High": "#EC0B43",
};

// const RiskAnalysis = () => (
//   <div className="mt-3 -mb-6 font-semibold">Review Risk Analysis</div>
// );

const LayerChart: React.FC<{ layer: Layer }> = ({ layer }) => {
  useEffect(() => {
    const ctx = document.getElementById("myChart") as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          RISK_FACTOR_CATEGORIES[0],
          RISK_FACTOR_CATEGORIES[1],
          RISK_FACTOR_CATEGORIES[2],
          RISK_FACTOR_CATEGORIES[3],
          // RISK_FACTOR_CATEGORIES[4],
        ],
        datasets: [
          {
            label: "Risk Analysis",
            data: [25, 25, 25, 25],
            backgroundColor: [
              wordToColor[layer.riskFactors[0]],
              wordToColor[layer.riskFactors[1]],
              wordToColor[layer.riskFactors[2]],
              wordToColor[layer.riskFactors[3]],
              // wordToColor[layer.riskFactors[4]],
            ],
            borderColor: "#fff",
            borderWidth: 5,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context: any) {
                const color =
                  context.dataset.backgroundColor[context.dataIndex];
                const word = `Risks: ${layer.riskFactors[context.dataIndex]}`;
                return word || color;
              },
              labelColor: function (context: any) {
                const color =
                  context.dataset.backgroundColor[context.dataIndex];
                return {
                  borderColor: color,
                  backgroundColor: color,
                };
              },
            },
          },
        },
      },
    });
    return () => {
      myChart.destroy();
    };
  }, [layer.riskFactors]);

  return (
    <div className="items-center -mt-6 flex flex-col w-2/3 sm:w-full justify-end mx-16 sm:mx-0">
      {/* <RiskAnalysis /> */}
      <div
         className="chart-container aspect-square max-w-[500px] w-4/5"
     
      >
          <canvas id="myChart"></canvas>
        </div>
    </div>
  );
};

export default LayerChart;
