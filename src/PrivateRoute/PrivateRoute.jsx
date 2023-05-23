import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation();
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login'></Navigate>
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;