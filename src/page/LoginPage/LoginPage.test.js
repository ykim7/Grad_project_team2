import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import LoginPage from "./LoginPage";
import { store } from "../../redux/store";
import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import { setUser } from "../../redux/actions/authActions";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));
const mockStore = configureMockStore([thunk]);

describe("Login page testing", () => {
  it("should render loginPage component", () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>,
    );
    const loginPageElement = screen.getByTestId("login-1");
    expect(loginPageElement).toBeInTheDocument();
  });

  it("handles Login API requset", async () => {
    const mockedStore = mockStore({});
    const { getByTestId, getByPlaceholderText } = render(
      <Provider store={mockedStore}>
        <LoginPage />
      </Provider>,
    );
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const loginButton = getByTestId("login-button");
    const mockAxios = new MockAdapter(axios);
    const mockUserData = {
      id: 28,
      email: "admin@myseneca.ca",
      role: "Admin",
      lastName: "Super",
      firstName: "Admin",
    };
    mockAxios
      .onPost("https://prj666-team2-backend.vercel.app/api/users/login")
      .reply(200, {
        user: mockUserData,
      });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    await act(async () => {
      fireEvent.click(loginButton);
      await waitFor(() => {
        const actions = mockedStore.getActions();
        expect(actions).toEqual([setUser(mockUserData)]);
        // expect(mockedStore.getState.auth.user).toEqual(mockUserData);
      });
    });

    expect(mockUsedNavigate).toHaveBeenCalledWith("/main");
  });
});
