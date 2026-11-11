import { Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div>
            <header></header>

            <main><Outlet /></main>

            <footer></footer>
        </div>
    )
}