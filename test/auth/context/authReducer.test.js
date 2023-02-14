import { authReducer, types } from "../../../src/auth";

describe("Pruebas en authReducer", () => {
  test("Debe de retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("Debe de (login) llamar al login autentificar y establecer el user", () => {
    const action = {
      type: types.login,
      payload: {
        id: 3,
        name: "Ozzu",
      },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, user: action.payload });
  });

  test("Debe de (logout) borrar el name del user y logged false", () => {
    const action = {
      type: types.logout,
    };

    const state = {
      logged: true,
      user: { id: 4, name: "Olu" },
    };

    const newState = authReducer(state, action);
    expect(newState).toEqual({ logged: false });
  });
});
