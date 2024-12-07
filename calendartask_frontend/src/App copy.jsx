
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Signin, { action as SigninAction } from "./pages/SignIn"
import Signup, { action as SignupAction } from "./pages/SignUp"
import "./index.css"
import PrivateRoute from "./components/PrivateRoute";
import ErrorPage from './error-page';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
    errorElement: <ErrorPage />,
    action: SigninAction,
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ]
  },
  {
    path: "/signup",
    element: <Signup />,
    action: SignupAction,
  },

]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
