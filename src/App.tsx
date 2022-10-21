import React, { useState } from "react";
import CheckListForm from "./components/CheckListForm";
import { Navbar } from "./components/Navbar";

const App: React.FunctionComponent = () => {
  const [checkList, setCheckList] = useState([]);

  return (
    <>
      <Navbar />
      <div className="container">
        <CheckListForm />
      </div>
    </>
  );
};

export default App;
