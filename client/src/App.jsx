import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Category from "./pages/Category/Category"
import Product from "./pages/Product/Product"
import "./app.scss"

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/category/:id", element: <Category /> },
      { path: "/product/:id", element: <Product /> },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
