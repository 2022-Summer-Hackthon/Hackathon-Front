import React, { memo } from "react";

const Input = memo(({ name, value, change }) => {
  return (
    <div className="input-container">
      <label>{name}</label>
      <input value={value} onChange={change} type="text" required />
    </div>
  );
});

export default Input;
