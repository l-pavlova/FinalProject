import React from 'react';
import { Route } from "react-router-dom";

const RouteWrapper = ({
    component: Component,
    layout: Layout,
    ...props
}) => {
    return (
        <Route {...props} exact render={(componentProps) => 
            <Layout {...componentProps}>
            <Component {...componentProps}/>
            </Layout>}
        />
    )
}

export default RouteWrapper;