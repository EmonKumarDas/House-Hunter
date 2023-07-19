import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';


const OwnerPrivateRoute = ({ children }) => {
    const { loading,isOwner } = useContext(AuthContext);
    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>;
    }

    if (isOwner=== false) {
        return <Navigate to='/' replace></Navigate>
    }

    return (children);

};

export default OwnerPrivateRoute;