import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';


const OwnerPrivateRoute = ({ children }) => {
    const { user, loading,isOwner } = useContext(AuthContext);
    console.log(isOwner)
    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>;
    }

    if (isOwner=== false) {
        return <Navigate to='/' replace></Navigate>
    }

    return (children);

};

export default OwnerPrivateRoute;