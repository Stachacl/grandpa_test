import React, { useState } from "react";
//other way to do input - is to useRef hook, but I am using useState this time

// interface that describes component's properties:
interface CkeckListFormProps {
  //i am expecting onAdd fnction with the type void - nothing to return, and it will have a title with the type sting:
  onAdd(title:string): void
}

// <{onAdd():void}> = (props) - here I am letting TypeScript know that i am expecting onAdd void in the App.tst 
export const CheckListForm: React.FC <CkeckListFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");
  
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

const keyPressHadler = (event: React.KeyboardEvent) => {
  if (event.key === "Enter") {
  props.onAdd(title) 
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

