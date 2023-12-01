import { createBrowserRouter } from "react-router-dom";

import App from "../App"
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        // errorElement: , notfound component
        children: [
            {
                path: "/",
                element: <App />
            }
        ]
    }
])