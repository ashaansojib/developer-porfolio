import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../layout/Home";
import About from "../pages/about/About";
import Resume from "../pages/resume/Resume";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";

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
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/resume',
                element: <Resume />
            },
            {
                path: '/projects',
                element: <Projects />
            }
        ]
    }
]);
export default router;