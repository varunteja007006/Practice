import { Accordian } from "..";
import { beforeEach, describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Testing accordian", () => {
  beforeEach(() => {
    render(
      <Accordian>
        <p>Hello</p>
      </Accordian>,
    );
  });
  test("Testing the children content", () => {
    expect(screen.queryByText(/Hello/i));
  });

  test("should show the content on accordion click", async () => {
    const title = screen.getByText(/Show/i);
    fireEvent.click(title);

    expect(await screen.findByText(/Hello/i));
  });
});
