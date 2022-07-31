import { render, screen } from "../../test-utils";

import userEvent from "@testing-library/user-event";
import Type from "../../components/Order/Type";
import { server } from "../../mocks/server";
import { rest } from "msw";
test("display product images from server", async () => {
  render(<Type orderType="products" />);

  const productImages = await screen.findAllByRole("img", {
    name: /product$/i,
  });

  expect(productImages).toHaveLength(2);

  const altText = productImages.map((elem) => elem.alt);
  expect(altText).toEqual(["America product", "England product"]);
});

test("when fetching the data with server error 500, error handle", async () => {
  server.resetHandlers(
    rest.get("http://localhost:5001/products", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Type orderType="products" />);

  const errorBanner = await screen.findByTestId("error-banner");

  expect(errorBanner).toHaveTextContent("에러가 발생");
});

test("fetching option data from server", async () => {
  render(<Type orderType="options" />);

  const checkboxEl = await screen.findAllByRole("checkbox");
  expect(checkboxEl).toHaveLength(2);
});

test("update products total when products change", async () => {
  render(<Type orderType="products" />);

  const productsTotal = screen.getByText("총가격:", { exact: false });
  expect(productsTotal).toHaveTextContent("0");

  // 아메리카 여행 상품 한개 올리기
  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });
  // userEvent.type(americaInput, "3");

  // userEvent.type(americaInput, "2");
  // userEvent.clear(americaInput);
  userEvent.clear(americaInput);

  userEvent.type(americaInput, "1");

  console.log("use", productsTotal.textContent);
  expect(productsTotal).toHaveTextContent("1000");
});

test("update options total when options change", async () => {
  render(<Type orderType="options" />);

  const optionsTotal = screen.getByText("총가격:", { exact: false });
  expect(optionsTotal).toHaveTextContent("0");

  const insuranceCheckbox = await screen.findByRole("checkbox", {
    name: "Insurance",
  });
  userEvent.click(insuranceCheckbox);
  expect(optionsTotal).toHaveTextContent("500");

  const dinnerCheckbox = await screen.findByRole("checkbox", {
    name: "Dinner",
  });
  userEvent.click(dinnerCheckbox);
  expect(optionsTotal).toHaveTextContent("1000");

  userEvent.click(dinnerCheckbox);
  expect(optionsTotal).toHaveTextContent("500");
});
