import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext';
import Layout from './Main.js';
const PrivateRouteWrapper = ({ component: Component, ...rest }) => {

 const {currentUser} = useAuth();

  return (
    <Route
      {...rest}
      exact render={(props) =>
        currentUser ? (
         <Layout {...props}>
          <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={{ pathname: '/authorization', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRouteWrapper