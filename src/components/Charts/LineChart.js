import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "apexchart-example",
          type: "line",
          height: 160,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "straight",
        },
        fill: {
          opacity: 0.7,
        },
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        yaxis: {
          min: 0,
        },
        title: {
          text: "$135,965",
          offsetX: 0,
          style: {
            fontSize: "24px",
          },
        },
        subtitle: {
          text: "Profits",
          offsetX: 0,
          style: {
            fontSize: "14px",
          },
        },
      },
      series: [
        {
          data: [30, 40, 45, 50],
        },
        {
          data: [4, 12, 56, 73],
        },
        {
          data: [30, 40, 45, 50],
        },
      ],
      //   series: [{
      //     data: randomizeArray(sparklineData)
      //   }],
    };
  }
  render() {
    return (
      <div style={{ maxWidth: "120px", width: "100%" }}>
        <Chart
          options={this.state.options}
          series={this.state.series}
          width={'100%'}
          height={'100%'}
        />
      </div>
    );
  }
}
