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
    // This line will not guarantee that the app is working with the current state: 
    // setCheckList([newChecklistItem, ...checkList])

    setCheckList(prev => [newChecklistItem, ...prev])
  }

  const ckeckBoxHandler = (id: number) => {}
  const binHandler = (id: number) => {}

  return (
    <>
      <Navbar />
      <div className="container">
        <CheckList checklist={checkList} onCheckBox={ckeckBoxHandler} onBin={binHandler}/>
        <CheckListForm onAdd={addHandler}/>
      </div>
    </>
  );
};

export default App;
