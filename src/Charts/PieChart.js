import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const datas = [
  { label: "Group A", value: 2400 },
  { label: "Group B", value: 4567 },
  { label: "Group C", value: 1398 },
];

export default function TwoSimplePieChart() {
  return (
    <div className="pie">
      <div className="overview2">
        <h3>Customers</h3>
        <p>Customers that buy products</p>
      </div>
      <PieChart
        series={[
          {
            data: datas,
            cx: 115,
            cy: 105,
            innerRadius: 50,
            outerRadius: 80,
          },
        ]}
        height={220}
        slotProps={{
          legend: { hidden: true },
        }}
      />
    </div>
  );
}
