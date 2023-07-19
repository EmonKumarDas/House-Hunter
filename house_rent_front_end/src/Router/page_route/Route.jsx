import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOuts/MainPage/Main";
import Index from "../../Pages/Index/Index";
import Registration from "../../Pages/UserAuth/Registration";
import LoginForm from "../../Pages/UserAuth/Login";
import DashBoardLayout from "../../LayOuts/DashBoard/DashBoard";
import AddHouse from "../../DashBoard/HouseOwner/AddHouse";
import HouseOwnerDashboard from "../../DashBoard/HouseOwner/HouseOwnerDashboard";

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
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        // errorElement:<Error></Error>,
        children: [
            {
                path: '/dashboard',
                element: <AddHouse></AddHouse>
            },
            {
                path: '/dashboard/houseList',
                element: <HouseOwnerDashboard></HouseOwnerDashboard>
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