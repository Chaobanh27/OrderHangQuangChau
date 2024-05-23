/* eslint-disable quotes */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard/Dashboard";
import RegisterForm from "../pages/Dashboard/Auth/RegisterForm";
import LoginForm from "../pages/Dashboard/Auth/LoginForm";
import Home from "../pages/Home/Home";
import GeneralBoard from "../pages/Dashboard/GeneralBoard/GeneralBoard";
import ReputableShop from "../pages/Dashboard/ReputableShop/ReputableShop";
import AddOrders from "../pages/Dashboard/Orders/AddOrders/AddOrders";
import ListOrders from "../pages/Dashboard/Orders/ListOrders/ListOrders";
import PendingOrders from "../pages/Dashboard/Orders/PendingOrders/PendingOrders";
import Orders from "../pages/Dashboard/Orders/Orders";
import Profile from "../pages/Dashboard/Member/Profile/Profile";
import ChangePassword from "../pages/Dashboard/Member/ChangePassword/ChangePassword";
import Reduces from "../pages/Dashboard/Member/Reduces/Reduces";
import Wallet from "../pages/Dashboard/Member/Wallet/Wallet";
import DomesticShipping from "../pages/Dashboard/Member/DomesticShipping/DomesticShipping";
import Deposit from "../pages/Dashboard/Member/Deposit/Deposit";
import ShipOrders from "../pages/Dashboard/ShipOrders/ShipOrders";
import ListShipOrders from "../pages/Dashboard/ShipOrders/ListShipOrders/ListShipOrders";
import ListShipIds from "../pages/Dashboard/ShipOrders/ListShipIds/ListShipIds";
import Ship from "../pages/Dashboard/Ship/Ship";
import Trasnport from "../pages/Dashboard/Ship/Trasnport/Trasnport";
import Finship from "../pages/Dashboard/Ship/Finship/Finship";
import Cart from "../pages/Dashboard/Cart/Cart";
import ShipOrder from "../pages/Dashboard/ShipOrders/ShipOrder/ShipOrder";
import ResetPassword from "../pages/Dashboard/Auth/ResetPassword";
import NotFound from "../pages/Dashboard/NotFound/NotFound";
import DeliveryNote from "../pages/Dashboard/StoreVN/DeliveryNote/DeliveryNote";
import ListComplains from "../pages/Dashboard/Complain/ListComplains/ListComplains";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/Home/HomePage/HomePage";
import PolicyPage from "../pages/Home/PolicyPage";
import InstructionPage from "../pages/Home/Instruction";
import PriceList from "../pages/Home/PriceList";
import PriceListCon from "../pages/Home/PriceListC";
import ServiceAlipay from "../pages/Home/ServiceAlipay";
import TrackingPage from "../pages/Home/TrackingPage";
import NewPage from "../pages/Home/NewPage";
import PaymentPage from "../pages/Home/PaymentPage";

const router = createBrowserRouter([
  {
    path: "",
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
          {
            path: "/dat-hang-taobao1688-tmall",
            element: <PaymentPage />,
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
          {
            path: "reset-password",
            element: <ResetPassword />,
          },
          {
            path: "general-board",
            element: <GeneralBoard />,
          },
          {
            path: "shop",
            element: <ReputableShop />,
          },
          {
            element: <ProtectedRoute />,
            children: [
              {
                path: "order",
                element: <Orders />,
                children: [
                  {
                    path: "list-orders",
                    element: <ListOrders />,
                  },
                  {
                    path: "add-orders",
                    element: <AddOrders />,
                  },
                  {
                    path: "pending-orders",
                    element: <PendingOrders />,
                  },
                ],
              },
              {
                path: "member",
                element: <Orders />,
                children: [
                  {
                    path: "profile",
                    element: <Profile />,
                  },
                  {
                    path: "change-password",
                    element: <ChangePassword />,
                  },
                  {
                    path: "reduces",
                    element: <Reduces />,
                  },
                  {
                    path: "wallet",
                    element: <Wallet />,
                  },
                  {
                    path: "domestic-shipping",
                    element: <DomesticShipping />,
                  },
                  {
                    path: "deposit",
                    element: <Deposit />,
                  },
                ],
              },
              {
                path: "ship-orders",
                element: <ShipOrders />,
                children: [
                  {
                    path: "",
                    element: <ShipOrder />,
                  },
                  {
                    path: "list-ship-orders",
                    element: <ListShipOrders />,
                  },
                  {
                    path: "list-ship-ids",
                    element: <ListShipIds />,
                  },
                ],
              },
              {
                path: "ship",
                element: <Ship />,
                children: [
                  {
                    path: "transport",
                    element: <Trasnport />,
                  },
                  {
                    path: "finship",
                    element: <Finship />,
                  },
                ],
              },
              {
                path: "storevn/delivery-note",
                element: <DeliveryNote />,
              },
              {
                path: "complain/list-complains",
                element: <ListComplains />,
              },
              {
                path: "cart",
                element: <Cart />,
              },
            ],
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);

export default router;
