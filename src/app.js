import React,{lazy,Suspense} from "react";
import ReactDOM  from "react-dom/client";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import '../style.css'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMent";
import Grocery from "./components/Grocery";

const Grocery = lazy(()=>import("./components/Grocery"));
const App = ()=>{
    return(
        <div className="app">
            <Header />
            <Outlet /> 
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                path: '/',
                element: <Body />,
                errorElement: <Error />
            },
            {
                path: '/about',
                element: <About />,
                errorElement: <Error />
            },
            {
                path: '/contact',
                element: <Contact />,
                errorElement: <Error />
            },
            {
                path: '/resturants/:id',
                element: < ResturantMenu />,
                errorElement: <Error />
            },
            {
                path: '/grocery',
                element: <Suspense><Grocery /></Suspense>,
                errorElement: <Error />
            },
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);