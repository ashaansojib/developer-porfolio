import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../layout/Home";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            }
        ]
    }
]);
export default router;