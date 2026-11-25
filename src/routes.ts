import { createBrowserRouter, redirect } from "react-router";
import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/HomePage";
import TimerPage from "./pages/TimerPage";
import FibonacciCalcPage from "./pages/FibonacciCalcPage";
import EditPostPage from "./pages/EditPostPage";
import AuthorsPage from "./pages/AuthorsPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import OrdersPage from "./pages/OrdersPage";

export const routes = createBrowserRouter([
  {
    path: "",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "timer",
        Component: TimerPage,
      },
      {
        path: "fibonacci",
        Component: FibonacciCalcPage,
      },
      {
        path: "post/edit",
        Component: EditPostPage,
      },
      {
        path: "authors",
        Component: AuthorsPage,
      },
      {
        path: "cart",
        Component: CartPage,
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "orders",
        Component: OrdersPage,
        middleware: [authMiddleware],
      },
    ],
  },
]);

function authMiddleware() {
  const token = localStorage.getItem("token");
  if (!token) {
    throw redirect("/login");
  }
}
