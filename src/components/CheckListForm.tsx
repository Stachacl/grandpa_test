import React, { useState } from "react";

//other way to do input - is to useRef hook, but I am using useState this time

// <{onAdd():void}> = (props) - here I am letting TypeScript know that i am expecting onAdd void in the App.tst 
export const CheckListForm: React.FC <{onAdd(title:string):void}> = (props) => {
  const [title, setTitle] = useState<string>("");
  
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

const keyPressHadler = (event: React.KeyboardEvent) => {
  if (event.key === "Enter") {
  console.log(title)
  //reset input field to empty after submit:
  setTitle('')
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

