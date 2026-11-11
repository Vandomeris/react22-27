import { createBrowserRouter } from "react-router";
import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/HomePage";
import TimerPage from "./pages/TimerPage";
import FibonacciCalcPage from "./pages/FibonacciCalcPage";
import EditPostPage from "./pages/EditPostPage";

export const routes = createBrowserRouter([
    {
        path: '',
        Component: MainLayout,
        children: [
            { index: true, Component: HomePage},
            {
                path: 'timer', Component: TimerPage
            },
            {
                path: 'fibonacci',
                Component: FibonacciCalcPage
            },
            {
                path: "post/edit",
                Component: EditPostPage
            }
        ]
    }
])