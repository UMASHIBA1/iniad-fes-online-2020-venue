import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import useRestrictBodyScroll from "../useRestrictBodyScroll";

const ForTestWrapper = ({ isRestrict }: { isRestrict: boolean }) => {
  useRestrictBodyScroll(isRestrict);

  return <div data-testid="test-component"></div>;
};

describe("useRestrictBodyScroll func test", () => {
  test("test: restrict body scroll", () => {
    const { baseElement } = render(<ForTestWrapper isRestrict={true} />);
    expect(baseElement.style.overflow).toBe("hidden");
  });

  test("test: liberate scroll restrict", () => {
    const { baseElement, rerender } = render(
      <ForTestWrapper isRestrict={true} />
    );
    expect(baseElement.style.overflow).toBe("hidden");
    rerender(<ForTestWrapper isRestrict={false} />);
    expect(baseElement.style.overflow).toBe("visible");
  });
});
