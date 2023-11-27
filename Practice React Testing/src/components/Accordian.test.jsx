import { describe, expect, test, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Accordian from "./Accordian";

describe("Accordion test", () => {
  // simple test
  /*
  test("Should show title", () => {
    render(
      <Accordian name={"varun"}>
        <h2>Testing the react app</h2>
      </Accordian>
    );
    expect(screen.getByText(/varun/i)).toBeDefined();
  });*/
  beforeEach(() => {
    render(
      <Accordian name={"varun"}>
        <h2>Testing the react app</h2>
      </Accordian>
    );
  });
  test("Accordian title", () => {
    expect(screen.getByText(/varun/i)).toBeDefined();
  });

  test("Accordian content Hidden on start", () => {
    expect(screen.queryByText(/Testing the react app/i)).not.toBeUndefined();
  });

  test("Accordian content Show on Click", async () => {
    const button = screen.getByText(/Toggle/i);
    fireEvent.click(button);

    expect(await screen.findByText(/Testing the react app/i)).toBeDefined();
  });
});
