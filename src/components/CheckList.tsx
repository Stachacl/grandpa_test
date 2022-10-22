import React from "react";
import { ICheckList } from "../interfaces";

type CheckListProps = {
  checkList: ICheckList[];
  //parameters to handle checkbox and Bin icon
  onCheckBox: (id: number) => void;
  onBin: (id: number) => void;
};

export const CheckList: React.FC<CheckListProps> = ({
  checkList,
  onCheckBox,
  onBin,
}) => {
  if (checkList.length === 0) {
    return <p className="center">You have no custom items to check</p>;
  }
  return (
    <ul>
      {checkList.map((checkListItem) => {
        const classes = ["checkListItem"];
        if (checkListItem.completed) {
          classes.push("completed");
        }

        return (
          <li className={classes.join(" ")} key={checkListItem.id}>
            <label>
              <input
                type="checkbox"
                checked={checkListItem.completed}
                onChange={onCheckBox.bind(null, checkListItem.id)}
              />
              <span>{checkListItem.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => onBin(checkListItem.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default CheckList;
