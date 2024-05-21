/* eslint-disable quotes */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard/Dashboard";
import RegisterForm from "../pages/Dashboard/Auth/RegisterForm";
import LoginForm from "../pages/Dashboard/Auth/LoginForm";
import Home from "../pages/Home/Home";
import HomePage from "../pages/Home/HomePage/HomePage";
import PolicyPage from "../pages/Home/PolicyPage";
import InstructionPage from "../pages/Home/Instruction";
import PriceList from "../pages/Home/PriceList";
import PriceListCon from "../pages/Home/PriceListC";
import ServiceAlipay from "../pages/Home/ServiceAlipay";
import TrackingPage from "../pages/Home/TrackingPage";
import NewPage from "../pages/Home/NewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },

          {
            path: "/bang-gia",
            element: <PriceList />,
          },
          {
            path: "/category/tin-tuc",
            element: <NewPage />,
          },
          {
            path: "/bang-gia-ky-gui-hang",
            element: <PriceListCon />,
          },
          {
            path: "/dich-vu-nap-tien-alipay-thanh-toan-tien-trung-quoc-chuyen-tien-trung",
            element: <ServiceAlipay />,
          },
          {
            path: "/chinh-sach-bao-mat",
            element: <PolicyPage />,
          },
          {
            path: "/huong-dan-mua-hang-tren-taobao-1688",
            element: <InstructionPage />,
          },
          {
            path: "/tracking",
            element: <TrackingPage />,
          },
        ],
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <LoginForm />,
          },
          {
            path: "login",
            element: <LoginForm />,
          },
          {
            path: "register",
            element: <RegisterForm />,
          },
        ],
      },
    ],
  },
]);

export default router;
