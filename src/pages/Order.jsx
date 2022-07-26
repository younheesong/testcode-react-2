import React from "react";
import { useContext } from "react";
import Type from "../components/Order/Type";
import { OrderContext } from "../contexts/OrderContext";
function Order({ setStep }) {
  const [orderDatas, updateItemCount] = useContext(OrderContext);
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
          <h2>total price {orderDatas.totals.total}</h2>
          <br />
          <button onClick={() => setStep(1)}>주문</button>
        </div>
      </div>
    </div>
  );
}

export default Order;
