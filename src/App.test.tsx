import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should renders header correctly", () => {
    render(<App />);
    const linkElement = screen.getByText(/Food List Page/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("should renders categories data correctly", () => {});

  test("should renders food data correctly", () => {});

  test("should renders category filter result correctly", () => {});

  test("should renders food search result correctly", () => {});

  test("should renders more food after click show more", () => {});
});
