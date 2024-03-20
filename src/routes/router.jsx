import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../layout/Home";
import About from "../pages/about/About";
import Resume from "../pages/resume/Resume";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";
import Dashboard from "../layout/Dashboard";
import ErrorPage from "../pages/error/ErrorPage";

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
    },
    {
        path: '/admin',
        element: <Dashboard />
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);
export default router;