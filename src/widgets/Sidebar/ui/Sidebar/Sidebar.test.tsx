import { screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import userEvent from "@testing-library/user-event";
import { renderWithTranslation } from "shared/lib/testing/renderWithTranslation";

describe("Sidebar.test", () => {
  test("Sidebar test", async () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("theme-switcher"));
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("lang-switcher"));
    expect(screen.getByTestId("lang-switcher")).toBeInTheDocument();
  });
});
