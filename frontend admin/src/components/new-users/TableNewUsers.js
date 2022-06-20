import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/card/Card";
import Moment from "moment";

export default function TableNewUsers() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(`/user?new=${true}/`, {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  return (
    <>
      {/* Content table - users list */}
      <Card.Body>
        <div className="table-view">
          <table
            className="data-tables table movie_table"
            style={{ width: "100%" }}
          >
            {/* Table head */}
            <thead>
              <tr>
                <th style={{ width: "10%" }}>Poză profil</th>
                <th style={{ width: "5%" }}>Nume</th>
                <th style={{ width: "5%" }}>Prenume</th>
                <th style={{ width: "10%" }}>Email</th>
                <th style={{ width: "5%" }}>Utilizator</th>
                <th style={{ width: "10%" }}>Telefon</th>
                <th style={{ width: "10%" }}>Dată</th>
              </tr>
            </thead>
            {/* Content table */}
            <tbody>
              {newUsers?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={
                        item.profilePicture ||
                        "https://pkds.ru/wp-content/uploads/2021/12/1_x7X2oAehk5M9IvGwO_K0Pg.png"
                      }
                      className="img-fluid avatar-50"
                      alt="author-profile"
                    />
                  </td>
                  {/* First name */}
                  <td>{item.firstName}</td>
                  {/* Last name */}
                  <td>{item.lastName}</td>
                  {/* Email address */}
                  <td>{item.email}</td>
                  {/* Username */}
                  <td>{item.username}</td>
                  {/* Phone number */}
                  <td>{item.phoneNumber}</td>
                  {/* Join date */}
                  <td>{Moment(item.createdAt).format("DD/MM/YYYY, HH:mm")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card.Body>
    </>
  );
}
