import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { AuthUser } from "../types";
import { api, getToken } from "../libs/api";

interface AuthContextType {
  user: AuthUser | null;
  logout: () => void;
  login: (token: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext<AuthContextType | undefined>(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  async function getMe() {
    const resp = await api.get<AuthUser>("/auth/me").json();
    setUser(resp);
  }

  useEffect(() => {
    if (getToken()) {
      api.get<AuthUser>("/auth/me").json().then(setUser);
    }
  }, []);

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  async function login(token: string) {
    localStorage.setItem("token", token);
    await getMe();
  }

  return (
    <AuthContext.Provider value={{ user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}
