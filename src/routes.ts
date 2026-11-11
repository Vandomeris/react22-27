import { createBrowserRouter } from "react-router";
import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/HomePage";
import TimerPage from "./pages/TimerPage";

export const routes = createBrowserRouter([
    {
        path: '',
        Component: MainLayout,
        children: [
            { index: true, Component: HomePage},
            {
                path: 'timer', Component: TimerPage
            }
        ]
    }
])