import { render } from "@testing-library/react";
import { OrderContextProiver } from "./contexts/OrderContext";

const customRender = (ui, options) =>
  render(ui, { wrapper: OrderContextProiver, ...options });

export * from "@testing-library/react";
export { customRender as render };
