import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("Sidebar.test", () => {
  test("", async () => {
    render(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("theme-switcher"));
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
});
