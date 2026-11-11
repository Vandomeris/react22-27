import { useRef, useState } from "react"

export default function TimerPage() {

    const [seconds, setSeconds] = useState(0)


    const intervalId = useRef<number | null>(null)

    const input = useRef<null | HTMLInputElement>(null)

    function start() {
        if (intervalId.current === null) {
            intervalId.current = setInterval(
                () => setSeconds(prev => prev + 1),
                1000
            )
        }

    }

    function stop() {
        if (intervalId.current !== null){
            clearInterval(intervalId.current)
            if(input.current !== null){
                input.current.focus()
            }
        }
    }


    return (
        <div>

            <div>Секундомер: {seconds} сек. </div>

            <div>
                <button onClick={start}>Старт</button>
                <button onClick={stop}>Стоп</button>
            </div>

            <div>
                <input ref={input} className="input" type="text" placeholder="Запишите время" />
            </div>

        </div>
    )
}