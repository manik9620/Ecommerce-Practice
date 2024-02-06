import './App.css'
import {Route,createBrowserRouter, createRoutesFromElements,RouterProvider} from "react-router-dom";
import home from './pages/home';
import cart from './pages/cart';
import Layout from './pages/Layout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
      <Route index path='/home' element={<home/>}/>
      <Route path='/cart' element={<cart/>} />
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
