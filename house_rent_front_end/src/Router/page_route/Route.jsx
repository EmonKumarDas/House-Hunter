import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOuts/MainPage/Main";
import Index from "../../Pages/Index/Index";
import Registration from "../../Pages/UserAuth/Registration";
import LoginForm from "../../Pages/UserAuth/Login";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Index></Index>
            },
        ],
    },
    {
        path: '/registration',
        element: <Registration></Registration>
    },
    {
        path: '/login',
        element: <LoginForm></LoginForm>
    },

])
export default route;