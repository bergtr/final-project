import React, { useEffect } from "react";

function Reference() {

  useEffect(() => {
    window.location.href = "https://google.com/";
  }, []);

  return (
    <div>
      <h2>Loading....</h2>
    </div>
  );
}

export default Reference;