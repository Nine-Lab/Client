import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/global-styles";

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const App = lazy(() => import("./components/page/Main"));
const MyPage = lazy(() => import("./components/page/MyPage"));
const Hood = lazy(() => import("./components/page/Hood"));
const Review = lazy(() => import("./components/page/Review"));
const SignUp = lazy(() => import("./components/auth/SignUp"));
const Login = lazy(() => import("./components/auth/Login"));
const Header = lazy(()=> import("./components/common/Header"))
const Leave = lazy(()=> import("./components/user/Leave"))
const Info = lazy(()=> import("./components/user/Info"))

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
    element: <MyPage />,
  },
  {
    path: "/Review",
    element: <Review />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/leave",
    element: <Leave />,
  },
  {
    path: "/info",
    element: <Info />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading...</div>}>
    <GlobalStyle />
    <Header />
    </Suspense>
      <RouterProvider router={router} />
  </React.StrictMode>,
);


reportWebVitals();