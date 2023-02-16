import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Pruebas en la página de <SearchPage/>", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrarse correctamente con los valores por defecto ", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    // screen.debug();
    expect(container).toMatchSnapshot();
  });

  test("Debe de a Batman y el input con el valor del queryString", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const inputValue = screen.getByRole("textbox");
    expect(inputValue.value).toBe("batman");
    const img = screen.getByRole("img");
    expect(img.src).toContain("/assets/heroes/dc-batman.jpg");
    const alert = screen.getByLabelText("alert-danger");
    expect(alert.style.display).toBe("none");
    // screen.debug();
  });

  test("Debe mostrar un error si no se encuentre el hero (batman123)", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const alert = screen.getByLabelText("alert-danger");
    expect(alert.style.display).not.toBe("none");
  });

  test("Debe llamar el navigate a la pantalla nueva", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const inputValue = screen.getByRole("textbox");
    fireEvent.change(inputValue, {
      target: { name: "searchTxt", value: "batman" },
    });
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(mockUseNavigate).toHaveBeenCalledWith("?q=batman");
  });
});
