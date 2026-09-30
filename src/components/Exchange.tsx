import { useEffect, useState } from "react"

export default function Exchange() {

    const [rubles, setRubles] = useState(null)
    const [valuta, setValuta] = useState("USD")

    const [result, setResult] = useState(null)



    useEffect(
        () => {
            if (valuta === 'USD') {
                setResult(rubles / 80)
            } else if (valuta === 'EUR') {
                setResult(rubles / 92)
            }
        },
        [rubles, valuta]
    )



    return (
        <div>
            <input value={rubles} onInput={(e) => setRubles(Number(e.currentTarget.value))} type="number" placeholder="Введите количество рублей" />
            <select value={valuta} onChange={(e) => setValuta(e.currentTarget.value)} >
                <option value="USD"> USD </option>
                <option value="EUR"> EUR </option>
            </select>
            <p>Вы получите: {result} </p>
        </div>
    )


}