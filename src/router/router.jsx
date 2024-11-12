import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import MainLayout from "../layout/MainLayout";
import About from "../components/About";

const  router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:"about",
                element:<About></About>
            }
        ]
    }
])
export default router