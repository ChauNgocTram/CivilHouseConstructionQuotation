import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import {
  AboutUs,
  Account,
  Auth,
  BlogCreate,
  BlogsList,
  DBHome,
  Dashboard,
  Home,
  NewsEdit,
  NewsCreate,
  NewsList,
  Password,
  Profile,
  Setting,
  UsersList,
} from "../pages";
import { AuthLayout, HomeLayout } from "../layout";
import News from "../pages/News/News";
import NewsDetail from "../pages/News/NewsDetail";
import HouseProject from "../pages/HouseProjects/HouseProject";
import { PageNotfound } from "../components";

function Routers() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/news", element: <News /> },
        { path: "/newsDetail/:id", element: <NewsDetail /> },
        { path: "/houseProject", element: <HouseProject /> },
        { path: "/aboutus", element: <AboutUs /> },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [{ path: "/auth", element: <Auth /> }],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { path: "home", element: <DBHome /> },
        { path: "users-list", element: <UsersList /> },

        { path: "create-news", element: <NewsCreate /> },
        { path: "list-news", element: <NewsList /> },
        { path: "edit-news/:id", element: <NewsEdit /> },

        { path: "create-blog", element: <BlogCreate /> },
        { path: "list-blogs", element: <BlogsList /> },
      ],
    },
    {
      path: "/setting",
      element: <Setting />,
      children: [
        { path: "profile", element: <Profile /> },
        { path: "password", element: <Password /> },
        { path: "account", element: <Account /> },
      ],
    },
    {
      path: "/404",
      element: <PageNotfound />,
    },
    // { path: "*", element: <Navigate to="/404" replace /> },
  ]);

  return routing;
}

export default Routers;
