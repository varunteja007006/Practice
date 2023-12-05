import { Accordian } from "..";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

describe("Accordian Tests", () => {
  test("Check for Heading", () => {
    render(<Accordian />);
    const title = screen.getByRole("heading");
    expect.extend(matchers);
    expect(title).toBeInTheDocument();
  });
});
