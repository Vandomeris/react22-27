import { useContext, useEffect, useMemo, useState } from "react";

function fibonacciCalc(n: number): number {
  if (n <= 1) return n;

  return fibonacciCalc(n - 1) + fibonacciCalc(n - 2);
}

export default function FibonacciCalcPage() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const result = useMemo(() => fibonacciCalc(number), [number]);

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className={theme === "dark" ? "bg-gray-500 text-white" : ""}>
      <button onClick={changeTheme}>Поменять тему</button>
      <input
        value={number}
        onInput={(e) => setNumber(Number(e.currentTarget.value))}
        type="number"
        placeholder="Введите число Фибоначчи"
      />
      <p>Число: {result}</p>
    </div>
  );
}
