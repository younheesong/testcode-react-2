import { render, screen } from "@testing-library/react";
import Summary from "../../pages/Summary";

test("checkbox default false", () => {
  render(<Summary />);

  const checkboxEl = screen.getByRole("checkbox", {
    name: "주문하시겠습니까?",
  });
  expect(checkboxEl.checked).toBeFalsy();

  const confirmBtnEl = screen.getByRole("button", {
    name: "확인",
  });
  expect(confirmBtnEl).toBeDisabled();
});
