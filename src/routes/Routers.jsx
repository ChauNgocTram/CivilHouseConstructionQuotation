import React from "react";
import { useRoutes } from "react-router-dom";
import { HomeLayout } from "../layout/HomeLayout.";
import Home from "../pages/Home/Home.jsx";
import News from "../pages/News/News"
import NewsDetail from "../pages/News/NewsDetail"
import HouseProject from "../pages/HouseProjects/HouseProject"
import HouseRoof from "../pages/HouseProjects/HouseRoof/HouseRoof";
import HouseRoofDetail from "../pages/HouseProjects/HouseRoof/HouseRoofDetail";
import TownHouse from "../pages/HouseProjects/TownHouse/TownHouse";
import TownHouseDetail from "../pages/HouseProjects/TownHouse/TownHouseDetail";

import Blog from "../pages/Blogs/Blog";
import BlogDetail from "../pages/Blogs/BlogDetail";

export default function Routers() {
    const routing = useRoutes([
        {
            path: "/",
            element: <HomeLayout/>,
            children: [
                { path: "/", element: <Home/>},
                { path: "/news", element: <News/>},
                { path: "/newsDetail/:id", element: <NewsDetail /> },
                { path: "/blog", element: <Blog/>},
                { path: "/blogDetail/:id", element: <BlogDetail/> },
              
                
              
                { path: "/houseProject", element: <HouseProject /> },
              
               { path: "/house-roof-projects", element: <HouseRoof/> },
               { path: "/house-roof-projects/details/:id", element: <HouseRoofDetail/>},
               { path: "/town-house-projects", element: <TownHouse/> },
               { path: "/town-house-projects/details/:id", element: <TownHouseDetail/>},
            ],
        },
        // {
        //     element: <CommonLayout />,
        //     children: [
        //       { path: "/profile", element:  },
        //       { path: "/updateProfile", element:  },
        //       { path: "/changePassword", element: },
        //     ],
        //   },
        //   {
        //     path: "/admin",
        //     element: <AdminLayout />,
        //     children: [
        //       { path: "/admin", element:  },
              
        //     ],
        //   },
    ]);
    return routing;
}
