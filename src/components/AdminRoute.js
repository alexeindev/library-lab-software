import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"


function AdminRoute({ component: Component, ...rest }) {
        
        const { currentUser } = useAuth()

    return (
        
    <Route
        {...rest}
        render={props =>{
            return currentUser.email==='g.anduquia@utp.edu.co'?  <Component {...props} /> :<Redirect to="/login" />
        }}
    ></Route>
    )
}

export default AdminRoute
