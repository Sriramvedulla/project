import React from "react";
import Chart from "react-apexcharts";

function BarCharts() {
  const series = [
    {
      data: [40, 31, 50, 44, 46, 25, 46, 50, 48, 44, 40, 45],
    },
  ];
  const options = {
    chart: {
      type: "bar",
      height: "300",
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
  };

  return (
    <div className="bar">
      <div className="bar-overview">
        <div className="overview">
          <h3>Overview</h3>
          <p>Monthly Earning</p>
        </div>
        <select id="quarterly">
          <option value="Quarterly">Quarterly</option>
        </select>
      </div>
      <Chart
        options={options}
        type="bar"
        series={series}
        width="700px"
        height={200}
      />
    </div>
  );
}

export default BarCharts;
