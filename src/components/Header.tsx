import { NavLink } from "react-router";
import UserInfo from "./UserInfo";

export default function Header() {


    return (
        <header className="flex justify-between items-center p-4 bg-orange-300">
            <div>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/fibonacci'>Расчет Фибоначчи</NavLink>
            </div>

            <UserInfo />
        </header>
    )
}