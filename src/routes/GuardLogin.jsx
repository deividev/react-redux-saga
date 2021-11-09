	
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector  } from 'react-redux';


export const GuardLogin = ({ component: Component, ...rest }) => {
    
    const isLogin = useSelector(state => state.user.isLogin)
    return (
        <Route
            {...rest}
            render={ props => {
                debugger
                if(isLogin) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to='/login' />;
                }
            }}
        />
    );
};