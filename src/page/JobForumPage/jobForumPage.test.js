import React from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import ForumPage from "../generic/ForumPage";
import { renderWithProviders } from "../../utils/test-utils";

jest.mock("axios");
describe("JobForum Page", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: [] });
  });

  it("renders without crashing", () => {
    renderWithProviders(<ForumPage name={"jobForums"} />);
    expect(screen.getByText("Job Forum")).toBeInTheDocument();
  });

  it("fetches forums on mount", async () => {
    renderWithProviders(<ForumPage name="jobForums" />);
    // You may need to adjust this depending on how the data is loaded asynchronously
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
  });

  it("handles search correctly", async () => {
    renderWithProviders(<ForumPage name="jobForums" />);
    const searchInput = screen.getByRole("textbox");
    const searchButton = screen.getByText("Search");

    fireEvent.change(searchInput, { target: { value: "search term" } });
    fireEvent.click(searchButton);

    await waitFor(() =>
      expect(axios.get).toHaveBeenCalledWith(
        expect.stringContaining("search=search term"),
      ),
    );
  });
});
