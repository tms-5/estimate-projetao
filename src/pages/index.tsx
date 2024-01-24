import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user, login, logout } = useAuth();

  return (
    <>
      <h1>Hello Context</h1>
      <h2>
        User: {user && String(user?.name)} <br />
        Level: {user && String(user?.level)}
      </h2>
      <div>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
}
