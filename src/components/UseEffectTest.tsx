import { useEffect, useState } from "react"

export default function App() {

    // ПЕРВЫЙ ВАРИАНТ С ЭЛМЕНТОМ В МАСИВЕ ЗАВИСИМОСТЕЙ
    const [count, setCount] = useState(0)
    const [minusCount, setMinusCount] = useState(0)

    useEffect(
        () => { console.log(count) },
        [count]
    )


    //   ВТОРОЙ ВАРИАНТ С ПУСТЫМ МАСИВОМ ЗАВИСИМОСТЕЙ
    useEffect(
        () => {
            console.log('ЭФФЕКТ СРАБОТАЛ')
        },
        []
    )

    useEffect(
        () => { console.log('ОТРАБОТАЛ useEffect без массива зависимостей - перерендер компонента') }
    )

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Увеличить {count}</button>
            <button onClick={() => setMinusCount(minusCount - 1)}>Уменьшить {minusCount}</button>
        </div>
    )
}