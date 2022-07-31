import React from "react";

function Options({ name, updateItemCount }) {
  const handleChange = (e) => {
    const currentValue = e.target.checked;
    if (currentValue === true) {
      updateItemCount(name, 1);
    } else {
      updateItemCount(name, 0);
    }
  };
  return (
    <div>
      <input
        type="checkbox"
        id={`${name} option`}
        onChange={handleChange}
      ></input>
      <label htmlFor={`${name} option`}>{name}</label>
    </div>
  );
}

export default Options;
