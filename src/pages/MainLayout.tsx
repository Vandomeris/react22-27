import { NavLink, Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div>
            <header>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/fibonacci'>Расчет Фибоначчи</NavLink>
            </header>

            <main><Outlet /></main>

            <footer></footer>
        </div>
    )
}