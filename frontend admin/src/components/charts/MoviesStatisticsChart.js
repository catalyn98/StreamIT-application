import React, { Component } from "react";
import Chart from "react-apexcharts";

class MoviesStatisticsChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            "Acțiune",
            "Aventură",
            "Comedie",
            "Drama",
            "Horror",
            "Thriller",
          ],
        },
      },
      series: [
        {
          name: "număr filme",
          data: [30, 40, 45, 50, 49, 36],
          color: "#ff0000",
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart" style={{ width: "105vh" }}>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MoviesStatisticsChart;
