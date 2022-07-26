import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  // const lintTest = screen.getByRole("button", {
  //   name: "lintTest",
  // });
  // 권장 문법 x -> eslint가 걸러줌 expect(lintTest.textContent).toBe("lintTest");
  // expect(lintTest).toHaveTextContent("lintTest");
});
