import React, { useState, useEffect } from "react";
import CheckListComponent from "../components/CheckList";
import CheckListForm from "../components/CheckListForm";
import { ICheckList } from "../interfaces";

export const CheckListPage: React.FC = () => {
  //UseState is using inteface ICheckList and it is an array []

  const [checkList, setCheckList] = useState<ICheckList[]>([]);

  //Storing users custom items in the local storage

  //1) Getting items from local storage:
  useEffect(() => {
    //in case local storage is null - adding  empty array []
    const saved = JSON.parse(
      localStorage.getItem("checkList") || "[]"
    ) as ICheckList[];
    setCheckList(saved);
  }, []);
  //2) Saving items to local storage:
  useEffect(() => {
    if (checkList.length !== 0) {
      //this line is new
      localStorage.setItem("checkList", JSON.stringify(checkList));
    }
  }, [checkList]);

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
      prev.map((checkListItem) => {
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
    <React.Fragment>
      <CheckListForm onAdd={addHandler} />
      <CheckListComponent
        checkList={checkList}
        onCheckBox={ckeckBoxHandler}
        onBin={binHandler}
      />
    </React.Fragment>
  );
};