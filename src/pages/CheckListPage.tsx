import React from "react";
import CheckListComponent from "../components/CheckList";
import CheckListForm from "../components/CheckListForm";

export const CheckListPage: React.FC = () => {
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
