import React, { useState } from "react";

function TudoApp() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <button onClick={() => increment()}>{count}</button>
    </div>
  );
}

export default TudoApp;
