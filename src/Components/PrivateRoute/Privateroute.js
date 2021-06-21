import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { InfoContext } from '../../App';

const Privateroute = ({ children, ...rest }) => {
    const[info,setinfo] = useContext(InfoContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        info.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default Privateroute;