import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import MyPage from "../pages/MyPage/MyPage";
import MyPageInfo from "../pages/MyPage/MyPageInfo";
import MyPageSearch from "../pages/MyPage/MyPageSearch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
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
    children: [
      { path: "info", element: <MyPageInfo /> },
      { path: "search", element: <MyPageSearch /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
