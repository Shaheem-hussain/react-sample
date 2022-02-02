import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        // handle success
        setUsers(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  let listUsers = () => {
    return users.map((user) => (
      <>
        <Link to={`/user/${user.id}`}>
          <img src={user.avatar} alt={user.first_name} />
          <h4 key={user.id}>{user.first_name}</h4>]
        </Link>
      </>
    ));
  };
  return <div>{listUsers()}</div>;
}

export default Users;
