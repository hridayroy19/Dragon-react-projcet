import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetals from "../pages/Home/NewsDetals";
import PrivetRout from "../PrivetRoute/PrivetRout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch("/news.json")
            },


            {
             path:"/news/:_id",
             element:<PrivetRout><NewsDetals></NewsDetals></PrivetRout>

            },

            {

                path:'/login',
                element:<Login></Login>
            },

            {

                path:'/register',
                element:<Register></Register>
            }
        ]
    }    
]);

export default router;