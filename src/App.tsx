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
      completed: false,
    };
    // This line will not guarantee that the app is working with the current state:
    // setCheckList([newChecklistItem, ...checkList])

    setCheckList((prev) => [newChecklistItem, ...prev]);
  };

  const ckeckBoxHandler = (id: number) => {
    setCheckList((prev) =>
      prev.map(checkListItem => {
        if (checkListItem.id === id) {
          checkListItem.completed = !checkListItem.completed;
        }
        return checkListItem;
      })
    );
  };
  const binHandler = (id: number) => {
    setCheckList((prev) =>
      prev.filter((checkListItem) => checkListItem.id !== id)
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <CheckList
          checkList={checkList}
          onCheckBox={ckeckBoxHandler}
          onBin={binHandler}
        />
        <CheckListForm onAdd={addHandler} />
      </div>
    </>
  );
};

export default App;
