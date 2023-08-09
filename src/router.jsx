import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail"
import SignIn from"./pages/SignIn"
import SignUp from "./pages/SignUp"

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/index', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path:'/cities', element: <Cities />},
  { path:'/city', element: <CityDetail />},
  { path:'/signin', element: <SignIn />},
  { path:'/signup', element: <SignUp />}
])

export default router