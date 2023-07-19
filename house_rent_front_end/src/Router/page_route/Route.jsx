import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOuts/MainPage/Main";
import Index from "../../Pages/Index/Index";
import Registration from "../../Pages/UserAuth/Registration";
import LoginForm from "../../Pages/UserAuth/Login";
import DashBoardLayout from "../../LayOuts/DashBoard/DashBoard";
import AddHouse from "../../DashBoard/HouseOwner/AddHouse";
import HouseOwnerDashboard from "../../DashBoard/HouseOwner/HouseOwnerDashboard";
import BookedHouse from "../../DashBoard/HouseRent/BookedHouse";
import PrivateRoute from "../Private/PrivateRoute";
import OwnerPrivateRoute from "../Private/OwnerPrivateRoute";
import BookedByUser from "../../DashBoard/HouseOwner/BookedByUser";

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
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        // errorElement:<Error></Error>,
        children: [

            {
                path: '/dashboard',
                element: <BookedHouse></BookedHouse>
            },

            {
                path: '/dashboard/Addhouse',
                element: <OwnerPrivateRoute><AddHouse></AddHouse></OwnerPrivateRoute>
            },
            {
                path: '/dashboard/houseList',
                element: <HouseOwnerDashboard></HouseOwnerDashboard>
            },
            {
                path: '/dashboard/mybooked',
                element: <BookedHouse></BookedHouse>
            },
            {
                path: '/dashboard/booked',
                element: <BookedByUser></BookedByUser>
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