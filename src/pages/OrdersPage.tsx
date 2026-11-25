import { useEffect } from "react";
import { api } from "../libs/api";

export default function OrdersPage() {
  useEffect(() => {
    async function getOrders() {
      const resp = await api.get("/orders").json();
      console.log(resp);
    }
    getOrders();
  }, []);

  return (
    <div>
      <h1>Заказы</h1>
    </div>
  );
}
