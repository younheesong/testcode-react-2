import "./App.css";
import Order from "./pages/Order";
import { OrderContextProiver } from "./contexts/OrderContext";
export default function App() {
  return (
    <div style={{ padding: "4rem" }}>
      <OrderContextProiver>
        <Order />
      </OrderContextProiver>
    </div>
  );
}
