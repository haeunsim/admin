import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    let location = useLocation();
    const loggedInUser = useSelector((state) => state.Auth.user);

    if (!loggedInUser) {
        return <Navigate to={'/login'} state={{ from: location }} replace />;
    }

    return <RouteComponent {...rest} />;
};

export default PrivateRoute;
