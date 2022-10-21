import React, { useState } from "react";

export const CheckListForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };


const keyPressHadler = (event: React.KeyboardEvent) => {
  if (event.key === "Enter") {
  console.log(title)
  }
}


  return (
    <div className="imput-field mt2">
      <input
        value={title}
        onChange={changeHandler}
        onKeyPress={keyPressHadler}
        type="text"
        id="title"
        autoFocus
        placeholder="Your custom check point"
      />
      <label htmlFor="title" className="active">
        Add your check point
      </label>
    </div>
  );
};

export default CheckListForm;

