import { useEffect, useState } from "react"
import type { Phone } from "../types"
import ky from "ky"
export default function Phones() {

    const [phones, setPhones] = useState<Phone[]>([])

    async function getPhones() {
        const response = await ky.get<Phone[]>('http://localhost:3000/phones').json()
        setPhones(response)
    }


    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [price, setPrice] = useState(0)
    const [color, setColor] = useState('')
    const [storage, setStorage] = useState('')
    const [isStock, setIsStock] = useState(false)


    useEffect(() => {
        getPhones()
    }, [])


    async function createPhone(e: React.SubmitEvent) {
        e.preventDefault()
        const response = await ky.post('http://localhost:3000/phones', {
            json: {
                "brand": brand,
                "model": model,
                "storage": storage,
                "color": color,
                "price": price,
                "inStock": isStock
            }
        }).json()
        console.log(response)
    }


    return (
        <div>

            <div>
                <form onSubmit={(e) => createPhone(e)}>
                    <input value={brand} onInput={(e) => setBrand(e.currentTarget.value)} type="text" placeholder="Бренд" />
                    <input value={model} onInput={(e) => setModel(e.currentTarget.value)} type="text" placeholder="МОдель" />
                    <input value={price} onInput={(e) => setPrice(e.currentTarget.value)} type="text" placeholder="Цена" />
                    <input value={color} onInput={(e) => setColor(e.currentTarget.value)} type="text" placeholder="Цвет" />
                    <input value={storage} onInput={(e) => setStorage(e.currentTarget.value)} type="text" placeholder="Накопитель" />
                    <label>
                        В наличии
                        <input type="checkbox" checked={isStock} />
                    </label>
                    <button>Создать</button>
                </form>
            </div>

            <div className="grid grid-cols-5 gap-5">
                {
                    phones.map(phone => (
                        <div>
                            <p>{phone.brand} {phone.model}</p>
                            <p>{phone.price} рублей</p>
                            <p>{phone.color}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}