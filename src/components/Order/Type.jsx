import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { OrderContext } from "../../contexts/OrderContext";
import Products from "./Products";
import ErrorBanner from "../ErrorBanner";
import Options from "./Options";
function Type({ orderType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderDatas, updateItemCount] = useContext(OrderContext);

  useEffect(() => {
    loadItems(orderType);
  }, []);

  const loadItems = async (orderType) => {
    try {
      const resp = await axios.get(`http://localhost:5001/${orderType}`);
      setItems(resp.data);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  if (error) {
    return <ErrorBanner message="에러가 발생" />;
  }

  const ItemComponents = orderType === "products" ? Products : Options;
  const optionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, orderType)
      }
    />
  ));
  return (
    <>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총가격: {orderDatas.totals[orderType]} </p>

      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" && "columns",
        }}
      >
        {optionItems}
      </div>
    </>
  );
}

export default Type;
