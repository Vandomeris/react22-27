import { Outlet } from "react-router";
import Header from "../components/Header";
import { useState } from "react";
import { AuthContext } from "../context/authContext";
import type { AuthUser } from "../types";
export default function MainLayout() {




    const [user, setUser] = useState<AuthUser | null>({
        email: 'ivan@serikov.ru',
        balance: 3500
    })


    return (
        <div>
            <AuthContext.Provider value={{
                user: user,
                logout() {
                    setUser(null)
                },
            }}>

                <Header />
                <main><Outlet /></main>
                <footer></footer>

            </AuthContext.Provider>

        </div>
    )
}