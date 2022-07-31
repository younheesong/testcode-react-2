import React from "react";
import Type from "../components/Order/Type";
function Order() {
  return (
    <div>
      <h1>travel products</h1>
      <div>
        <Type orderType="products" />
      </div>
      <div style={{ display: "flex", marginTop: 20 }}>
        <div style={{ width: "50%" }}>
          <Type orderType="options" />
        </div>
        <div>
          <h2>total price</h2>
          <br />
          <button>주문</button>
        </div>
      </div>
    </div>
  );
}

export default Order;
