import React from "react";

function Products({ name, imagePath }) {
  return (
    <div>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:5001/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "right" }}>{name}</label>
        <input
          type="number"
          style={{ marginLeft: 7 }}
          name="quantity"
          min="0"
          defaultValue={0}
        />
      </form>
    </div>
  );
}

export default Products;
