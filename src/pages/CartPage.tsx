import { useCart } from "../stores/cartStore"


export default function CartPage(){


    const {items, clearCart} = useCart()


    return (
        <div>
            <h1>Корзина</h1>

            <button onClick={() => clearCart()}>Очистить корзину</button>

            {
                items.map(item => (
                    <div className="flex gap-x-6 py-4 items-center">
                        <p>{item.firstName}</p>
                           <p>{item.lastName}</p>
                        <button>Удалить</button>
                    </div>
                ))
            }
            
        </div>
    )
}