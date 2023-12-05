import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Testing getByRole", () => {
  test("First test", () => {
    render(<Application></Application>);
    expect(screen.getByRole("checkbox")).toBeDefined();
  });
});
