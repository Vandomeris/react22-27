import { createContext } from "react";
import type { AuthUser } from "../types";

interface AuthContextType{
    user: AuthUser | null,
    logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)