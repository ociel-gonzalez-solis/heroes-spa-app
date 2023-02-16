import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { NavBar } from "../../src/ui/components/NavBar";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Pruebas en el <Navbar/>", () => {
  const contextValue = {
    logged: true,
    user: {
      id: 6,
      name: "Charles",
    },
    onLogout: jest.fn(),
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe mostrar el nombre del usuario", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // screen.debug();
    expect(screen.getByText("Charles")).toBeTruthy();
  });

  test("debe llamar el logout y navigate cuando se haga click en el botón", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);

    expect(contextValue.onLogout).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith("/login", {
      replace: true,
    });
  });
});


