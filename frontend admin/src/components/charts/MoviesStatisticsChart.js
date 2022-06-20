import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";

export default function MoviesStatisticsChart() {
  const [, setMoviesStatistics] = useState([]);
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getMoviesStatistics = async () => {
      const genre = [];
      const numberMovies = [];
      try {
        const res = await axios.get("/movie/statistics/", {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        const statisticsList = res.data.sort(function (a, b) {
          return a.total - b.total;
        });
        statisticsList?.map((item) =>
          setMoviesStatistics((prev) => [
            ...prev,
            {
              name: genre.push([item._id._id]),
              "New Movie": numberMovies.push(item.total),
            },
          ])
        );
        setCategory(genre);
        setData(numberMovies);
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesStatistics();
  }, []);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart" style={{ width: "105vh" }}>
          <Chart
            options={{
              chart: {
                id: "basic-bar",
              },
              xaxis: {
                categories: category,
              },
            }}
            series={[
              {
                name: "număr filme",
                data: data,
                color: "#ff0000",
              },
            ]}
            type="bar"
          />
        </div>
      </div>
    </div>
  );
}
