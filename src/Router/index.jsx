import { createBrowserRouter } from "react-router-dom";
import { Helmet } from 'react-helmet'
import Home from "../Pages/Home";
import About from "../Pages/About";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <Home/>
            </div>
        ),
    },
    {
        path: "/about",
        element: <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <About />
        </div>
    },

]);

export default router