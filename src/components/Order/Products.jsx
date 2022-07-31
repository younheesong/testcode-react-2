import React from "react";

function Products({ name, imagePath, updateItemCount }) {
  const handleChange = (e) => {
    const currentValue = e.target.value;
    updateItemCount(name, currentValue);
  };
  return (
    <div>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:5001/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label htmlFor={name} style={{ textAlign: "right" }}>
          {name}
        </label>
        <input
          id={name}
          type="number"
          style={{ marginLeft: 7 }}
          name="quantity"
          min="0"
          defaultValue={0}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Products;
