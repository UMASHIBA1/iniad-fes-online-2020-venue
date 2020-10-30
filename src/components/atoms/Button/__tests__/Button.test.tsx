import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button func test", () => {
  test("test: run onclick func, when click button", () => {
    let runFuncFlag = false;
    const mockFn = jest.fn(() => (runFuncFlag = true));
    expect(runFuncFlag).toBe(false);
    const { getByTestId } = render(
      <Button text="button" type="button" onClick={mockFn} />
    );
    const button = getByTestId("button");
    fireEvent.click(button);
    expect(runFuncFlag).toBe(true);
  });
});
