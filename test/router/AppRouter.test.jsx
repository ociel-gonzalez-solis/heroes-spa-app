import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context";
import { AppRouter } from "../../src/router";

describe("Pruebas en <AppRouter/>", () => {
  test("Debe de mostrar el login si no estoy autenticado ", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("Debe de mostrar el componente marvel si esta autentificado", () => {
    const contextValue = {
      logged: true,
      user: {
        id: 5,
        name: "John",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    // screen.debug();
    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
  });
});
