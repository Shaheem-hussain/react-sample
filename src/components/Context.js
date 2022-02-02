import React from "react";
import { Link, Router } from "react-router-dom";
function Context() {
  return (
    <>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/user">User</Link>
      </div>
    </>
  );
}

export default Context;
