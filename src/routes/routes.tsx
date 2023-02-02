import NavBar from "../components/nav-bar/nav-bar";
import {createBrowserRouter} from "react-router-dom";
import AboutMe from "../pages/about-me/about-me";
import Skills from "../pages/skills/Skills";
import Formation from "../pages/formation/formation";
import Proyects from "../pages/proyects/proyects";
import Contact from "../pages/contact/contact";


const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <NavBar/>,
        children: [
            {
              path: "/",
              element: <AboutMe />,
            },
            {
                path: "/skills",
                element: <Skills />,
            },
            {
              path: "/formation",
              element: <Formation />,
            },
            {
              path: "/proyects",
              element: <Proyects />,
            },
            {
              path: "/contact",
              element: <Contact />,
            },
          ],
    },

])



export default AppRoutes;