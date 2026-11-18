import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { NavLink } from "react-router"

export default function UserInfo() {

    const context = useContext(AuthContext)

    return (
        <div
            className="flex items-center gap-x-4">
            {
                context?.user ? (
                    <>
                        <p>{context.user.email}</p>
                        <p>{context.user.balance}$</p>
                        <button onClick={() => context.logout()}>🔙 Выйти</button>
                    </>
                ):
                (<NavLink to="/login">Login</NavLink>)
            }

        </div>
    )

}