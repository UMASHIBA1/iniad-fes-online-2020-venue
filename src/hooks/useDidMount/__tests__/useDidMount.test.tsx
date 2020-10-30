import React, { useState } from "react";
import useDidMount from "../useDidMount";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

const ForTestWrapper = ({ func }: { func: () => void }) => {
  const [forTestState, changeState] = useState(0);

  useDidMount(() => {
    func();
  });

  return (
    <div
      data-testid="didmount-wrapper"
      onClick={() => changeState(forTestState + 1)}
    >
      {forTestState}
    </div>
  );
};

describe("ForTestWrapper func test", () => {
  test("test for test: run event when click", () => {
    const { getByTestId } = render(<ForTestWrapper func={() => {}} />);
    const wrapper = getByTestId("didmount-wrapper");
    expect(wrapper.textContent).toBe("0");
    fireEvent.click(wrapper);
    expect(wrapper.textContent).toBe("1");
  });
});

describe("useDidMount func test", () => {
  test("test: run useDidMount when render", () => {
    let isRun = false;
    const mockFn = jest.fn(() => (isRun = true));
    expect(isRun).toBe(false);
    render(<ForTestWrapper func={mockFn} />);
    expect(isRun).toBe(true);
  });

  test("test: useDidMount does not run multi time", () => {
    let runCount = 0;
    const mockFn = jest.fn(() => runCount++);
    const { getByTestId } = render(<ForTestWrapper func={mockFn} />);
    const wrapper = getByTestId("didmount-wrapper");
    expect(runCount).toBe(1);
    fireEvent.click(wrapper);
    expect(runCount).toBe(1);
  });
});
