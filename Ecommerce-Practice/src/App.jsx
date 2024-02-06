import './App.css'
import {Route,createBrowserRouter, createRoutesFromElements,RouterProvider} from "react-router-dom";
import Home from './pages/home';
import Cart from './pages/cart';
import Layout from './pages/Layout';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
      <Route index  element={<Home/>}/>
      <Route path='/cart' element={<Cart/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
