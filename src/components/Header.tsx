import { NavLink } from "react-router";
import UserInfo from "./UserInfo";
import { useCart } from "../stores/cartStore";
export default function Header() {


    const { items } = useCart()

    return (
        <header className="flex justify-between items-center p-4 bg-orange-300">
            <div>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/fibonacci'>Расчет Фибоначчи</NavLink>
                <NavLink to='/cart'>Корзина ({items.length})</NavLink>
                <NavLink to='/authors'>Покупка</NavLink>
            </div>

            <UserInfo />
        </header>
    )
}