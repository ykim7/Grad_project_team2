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
    renderWithProviders(<ForumPage name={"lectureEvaluations"} />);
    expect(screen.getByText("Lecture Evaluation")).toBeInTheDocument();
  });

  it("fetches forums on mount", async () => {
    renderWithProviders(<ForumPage name="lectureEvaluations" />);
    // You may need to adjust this depending on how the data is loaded asynchronously
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
  });

  it("handles search correctly", async () => {
    renderWithProviders(<ForumPage name="lectureEvaluations" />);
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
