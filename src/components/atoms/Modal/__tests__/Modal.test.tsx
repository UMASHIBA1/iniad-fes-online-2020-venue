import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "../Modal";

describe("Modal func test", () => {
  test("test: close Modal, when click bg", () => {
    let isShow = true;
    const closeFunc = () => (isShow = false);
    const { getByTestId } = render(
      <Modal isShow={isShow} onClose={closeFunc}>
        children sample
      </Modal>
    );
    const modalBG = getByTestId("modal-bg");
    expect(isShow).toBe(true);
    fireEvent.click(modalBG);
    expect(isShow).toBe(false);
  });
});
