import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import RegisterPage from "./RegisterPage";

jest.mock("axios");

describe("RegisterPage", () => {
  test("renders RegisterPage component", () => {
    render(
      <Router>
        <RegisterPage />
      </Router>,
    );
    expect(screen.getByTestId("register-btn")).toBeInTheDocument();
  });

  test("handles registration form submission", async () => {
    axios.post.mockResolvedValueOnce({
      status: 201,
      data: { message: "Registration successful!" },
    });

    render(
      <Router>
        <RegisterPage />
      </Router>,
    );

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@myseneca.ca" },
    });

    fireEvent.change(screen.getByLabelText("Password:"), {
      target: { value: "Test@123" },
    });

    fireEvent.change(screen.getByLabelText("Confirm Password:"), {
      target: { value: "Test@123" },
    });

    fireEvent.change(screen.getByLabelText(/role/i), {
      target: { value: "Student" },
    });

    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "Doe" },
    });

    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "John" },
    });

    fireEvent.click(screen.getByTestId("register-btn"));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        "https://prj666-team2-backend.vercel.app/api/users/register",
        {
          email: "test@myseneca.ca",
          password: "Test@123",
          role: "Student",
          lastName: "Doe",
          firstName: "John",
        },
      );

      expect(screen.getByText("Registration successful!")).toBeInTheDocument();
    });
  });
});
