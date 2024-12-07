
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Signin, {action as SigninAction} from "./pages/SignIn"
import Signup, {action as SignupAction} from "./pages/SignUp"
import "./index.css"
import PrivateRoute from "./components/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
    action: SigninAction,
  },
  {
    path: "/signup",
    element: <Signup />,
    action: SignupAction,
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
]);


function App() {
      return (
          <RouterProvider router={router} />
      );
}

export default App
