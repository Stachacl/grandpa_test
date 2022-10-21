import React, { useState } from "react";
import CheckList from "./components/CheckList";
import CheckListForm from "./components/CheckListForm";
import { Navbar } from "./components/Navbar";

const App: React.FunctionComponent = () => {
  const [checkList, setCheckList] = useState([]);

  const addHandler = (title: string) => {
    console.log("Add new item", title)
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <CheckList />
        <CheckListForm onAdd={addHandler}/>
      </div>
    </>
  );
};

export default App;
