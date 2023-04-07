import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/global-styles";
import Header from "./components/common/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Loading from "./components/common/Loading";

// const About = lazy(() => {
//     return Promise.all([
//         import('../pages/About'),
//         new Promise(resolve => setTimeout(resolve, 180000))
//     ])
//     .then(([moduleExports]) => moduleExports);
// });

const App = lazy(() => import("./components/page/Main"));
const Mypage = lazy(() => import("./components/page/Profile"));
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
        path: "/mypage",
        element: <Mypage />,
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

        <Suspense fallback={<Loading />}>
            <Header />
            <RouterProvider router={router} />
        </Suspense>
    </React.StrictMode>,
);

reportWebVitals();
