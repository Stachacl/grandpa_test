import React, { useState } from "react";

export const CheckListForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");

  return (
    <div className="imput-field mt2">
      <input
        value={title}
     
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
