import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactsPage from "../pages/ContactsPage";
import ProductListPage from "../pages/ProductListPage";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoudPage";


export const router = createBrowserRouter([
    {
        element: <Layout/>, 
        children: [
            {path: '/', element: <HomePage/>},
            {path: '/about', element: <AboutPage/>},
            {path: '/contacts', element: <ContactsPage/>},
            {path: '/products', element: <ProductListPage/>},
            {path: '/products/:id', element: <ProductPage/>},
            {path: '*', element: <NotFoundPage/>},
        ]
    }
])