import React, { useState } from "react";
import CheckList from "./components/CheckList";
import CheckListForm from "./components/CheckListForm";
import { Navbar } from "./components/Navbar";

const App: React.FunctionComponent = () => {
  const [checkList, setCheckList] = useState([]);

  const addHandler = (title: string) => {
    const newChecklistItem = {
      title: title,
      id: Date.now,
      completed: false
    }
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <CheckList checklist={checkList}/>
        <CheckListForm onAdd={addHandler}/>
      </div>
    </>
  );
};

export default App;
