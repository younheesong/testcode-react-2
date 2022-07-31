import { render, screen } from "@testing-library/react";
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
    rest.get("http://localhost:5000/products", (req, res, ctx) => {
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
