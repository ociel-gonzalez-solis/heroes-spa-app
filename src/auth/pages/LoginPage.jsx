import { useCustomNavigation } from "../../hooks/useCustomNavigation";

export const LoginPage = () => {
  const { handleLogin } = useCustomNavigation();

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
