
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Signin, {action as SigninAction} from "./pages/SignIn"
import Signup, {action as SignupAction} from "./pages/SignUp"
import "./index.css"


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
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
]);


function App() {
      return (
          <RouterProvider router={router} />
      );
}

export default App
