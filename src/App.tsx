import React, { useState } from "react";
import CheckList from "./components/CheckList";
import CheckListForm from "./components/CheckListForm";
import { Navbar } from "./components/Navbar";
import { ICheckList } from "./interfaces";

const App: React.FunctionComponent = () => {

  //UseState is using inteface ICheckList and it is an array []

  const [checkList, setCheckList] = useState<ICheckList[]>([]);

  const addHandler = (title: string) => {
    const newChecklistItem: ICheckList = {
      title: title,
      id: Date.now(),
      completed: false
    }

    setCheckList([newChecklistItem, ...checkList])
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
