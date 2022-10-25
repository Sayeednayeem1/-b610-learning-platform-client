import { createBrowserRouter } from "react-router-dom";
import Category from "../../components/Category/Category";
import Courses from "../../components/Courses/Courses";
import Details from "../../components/Details/Details";
import Home from "../../components/Home/Home";
import Main from "../../layouts/Main";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/details/:id',
                element: <Details></Details>
            }
        ]
    }
])