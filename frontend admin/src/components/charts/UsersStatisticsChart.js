import React, { Component } from "react";
import Chart from "react-apexcharts";

class UsersStatisticsChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["Mar", "Apr", "Mai", "Iun", "Iul"],
        },
      },
      series: [
        {
          name: "număr utilizatori",
          data: [45, 50, 49, 60, 70],
          color: "#ff0000",
        },
      ],
    };
  }

  render() {
    return (
      <div id="chart">
        <div className="row">
          <div className="mixed-chart" style={{ width: "105vh" }}>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UsersStatisticsChart;
