import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import Register from "./pages/Register";
import CoursePage from "./pages/CoursePage";
import Login from "./pages/Login";
import MyDashboard from "./pages/MyDashboard";
import PaymentCenter from "./pages/PaymentCenter";
import ScrollToTop from "./ScrollToTop";

export const router = createBrowserRouter([
  {
    Component: ScrollToTop,
    children: [
      { path: "/", Component: Home },
      { path: "/login", Component: Login },
      { path: "/dashboard", Component: StudentDashboard },
      { path: "/my-dashboard", Component: MyDashboard },
      { path: "/register", Component: Register },
      { path: "/course/:slug", Component: CoursePage },
      { path: "/payment", Component: PaymentCenter },
    ],
  },
]);
