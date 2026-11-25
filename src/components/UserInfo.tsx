import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function UserInfo() {
  const auth = useAuth();

  return (
    <div className="flex items-center gap-x-4">
      {auth?.user ? (
        <>
          <p>{auth.user.username}</p>
          <button onClick={() => auth.logout()}>🔙 Выйти</button>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </div>
  );
}
