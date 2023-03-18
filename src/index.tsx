import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/global-styles";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// const App = lazy(() => import("./components/page/Main"));
const App = lazy(() => import("./components/page/Main"));
const Profile = lazy(() => import("./components/page/Profile"));
const Hood = lazy(() => import("./components/page/Hood"));
const Review = lazy(() => import("./components/page/Review"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/hood",
        element: <Hood />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/Review",
        element: <Review />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <RouterProvider router={router} />
    </React.StrictMode>,
);

reportWebVitals();
