import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";



// const App = lazy(() => import("./App"));
const Info = lazy(() => import("./components/page/Info"));
const Leave = lazy(() => import("./components/page/Leave"));

// const router = createBrowserRouter([
//   {
//     path: "/info",
//     element: <Info />,
//   },
//   {
//     path: "/leave",
//     element: <Leave />,
//   },
// ]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    {/* <SignUpModal /> */}
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
