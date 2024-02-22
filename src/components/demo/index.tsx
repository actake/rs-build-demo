import React, { useEffect, useState } from "react";

export const Demo = () => {
  const [arr, setArr] = useState(new Array(100 * 10000).fill(1));

  return <div className="demo">test{arr.length}</div>;
};
