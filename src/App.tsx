import React from "react";
import CheckListForm from "./components/CheckListForm";
import { Navbar } from "./components/Navbar";

const App: React.FunctionComponent = () => {
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
