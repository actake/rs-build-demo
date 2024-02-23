import React, { useMemo, useState } from "react";
import { Button, Drawer } from "antd";
import { Demo } from "./components";

import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Button onClick={() => setVisible((prev) => !prev)}>toggle</Button>
      {/* render in Drawer */}
      {visible && (
        <Drawer visible={true} onClose={() => setVisible(false)} destroyOnClose>
          <Demo />
        </Drawer>
      )}
      {/* just condition render */}
      {/* {visible && <Demo />} */}
    </div>
  );
};

export default App;
