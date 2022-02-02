import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

function User() {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        // handle success
        setUser(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div>
      <img src={user.avatar} alt="" />
    </div>
  );
}

export default User;
