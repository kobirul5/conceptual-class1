import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import MainLayout from "../layout/MainLayout";
import About from "../components/About";
import Login from "../components/Login";

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
            },
            {
                path:'login',
                element:<Login></Login>
            }
        ]
    }
])
export default router