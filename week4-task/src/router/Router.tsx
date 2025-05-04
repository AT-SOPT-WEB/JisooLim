// router/Router.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
