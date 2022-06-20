import React, { useMemo, useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";

export default function UsersStatisticsChart() {
  const MONTHS = useMemo(
    () => [
      "Ianuarie",
      "Februarie",
      "Martie",
      "Aprilie",
      "Mai",
      "Iunie",
      "Iulie",
      "August",
      "Septembrie",
      "Octombrie",
      "Noiembrie",
      "Decembrie",
    ],
    []
  );

  const [, setUserStatistics] = useState([]);
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsersStatistics = async () => {
      const month = [];
      const numberUsers = [];
      try {
        const res = await axios.get("/user/statistics/", {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        const statisticsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statisticsList?.map((item) =>
          setUserStatistics((prev) => [
            ...prev,
            {
              name: month.push(MONTHS[item._id - 1]),
              "New User": numberUsers.push(item.total),
            },
          ])
        );
        setCategory(month);
        setData(numberUsers);
      } catch (error) {
        console.log(error);
      }
    };
    getUsersStatistics();
  }, [MONTHS]);

  return (
    <div id="chart">
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
              yaxis: {
                tickAmount: 4,
                labels: {
                  formatter: function (val) {
                    return val.toFixed(0);
                  },
                },
              },
            }}
            series={[
              {
                name: "număr utilizatori",
                data: data,
                color: "#ff0000",
              },
            ]}
            type="line"
          />
        </div>
      </div>
    </div>
  );
}
