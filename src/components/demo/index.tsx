import React, { useEffect, useState } from "react";

export const Demo = () => {
  const [arr, setArr] = useState(new Array(1000 * 10000).fill(1));

  return (
    <div className="demo" style={{ color: "black" }}>
      test
    </div>
  );
};
