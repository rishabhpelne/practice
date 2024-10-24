import axios from "axios";
import React, { useEffect, useState } from "react";

const View = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => setData(res.data))
      .catch((err) => alert(err));
  }, []);
  return (
    <div className="container">
      <table className="table table-stripped table-borderes">
        <thead className="table-primary">
          <tr>
            <td>id</td>
            <td>username</td>
            <td>email</td>
            <td>password</td>
            <td>name</td>
            <td>phone</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default View;
